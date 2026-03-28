#!/usr/bin/env python3
"""
List files in public/art that are missing from src/app/art/art.content.ts.

The script is intentionally lightweight and repo-specific. It infers sort dates
from filename prefixes like YYMMDD or YYYYMMDD, falls back to filesystem
creation time, reads dimensions with macOS `sips`, and prints starter objects
for new artEntries items.
"""

from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
ART_CONTENT = ROOT / "src/app/art/art.content.ts"
ART_DIR = ROOT / "public/art"

SRC_PATTERN = re.compile(r"src:\s*'(/art/[^']+)'")


@dataclass
class MissingArt:
    file_name: str
    web_src: str
    sort_date: datetime
    sort_date_source: str
    display_date: str
    width: int | None
    height: int | None
    title_guess: str


def load_existing_sources() -> set[str]:
    content = ART_CONTENT.read_text()
    return set(SRC_PATTERN.findall(content))


def infer_date(file_path: Path) -> tuple[datetime, str]:
    stem = file_path.stem
    match = re.match(r"^(?P<date>\d{6}|\d{8})", stem)
    if match:
        raw = match.group("date")
        if len(raw) == 6:
            year = 2000 + int(raw[0:2])
            month = int(raw[2:4])
            day = int(raw[4:6])
        else:
            year = int(raw[0:4])
            month = int(raw[4:6])
            day = int(raw[6:8])
        return datetime(year, month, day), f"filename:{raw}"

    stat = file_path.stat()
    created = getattr(stat, "st_birthtime", stat.st_ctime)
    return datetime.fromtimestamp(created), "filesystem"


def infer_title(file_path: Path) -> str:
    stem = file_path.stem
    stem = re.sub(r"^\d{6,8}[_ -]*", "", stem)
    stem = re.sub(r"[-_]+", " ", stem)
    stem = re.sub(r"\s+", " ", stem).strip()
    if not stem:
        return file_path.stem
    return stem.title()


def read_dimensions(file_path: Path) -> tuple[int | None, int | None]:
    result = subprocess.run(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(file_path)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None, None

    width = None
    height = None
    for line in result.stdout.splitlines():
        if "pixelWidth:" in line:
            width = int(line.split(":", 1)[1].strip())
        if "pixelHeight:" in line:
            height = int(line.split(":", 1)[1].strip())
    return width, height


def build_missing_art() -> list[MissingArt]:
    existing_sources = load_existing_sources()
    art_files = sorted(
        path for path in ART_DIR.iterdir() if path.is_file() and not path.name.startswith(".")
    )
    missing: list[MissingArt] = []
    for file_path in art_files:
        web_src = f"/art/{file_path.name}"
        if web_src in existing_sources:
            continue
        sort_date, source = infer_date(file_path)
        width, height = read_dimensions(file_path)
        missing.append(
            MissingArt(
                file_name=file_path.name,
                web_src=web_src,
                sort_date=sort_date,
                sort_date_source=source,
                display_date=sort_date.strftime("%B %Y"),
                width=width,
                height=height,
                title_guess=infer_title(file_path),
            )
        )

    missing.sort(key=lambda item: item.sort_date, reverse=True)
    return missing


def print_report(missing: list[MissingArt]) -> None:
    if not missing:
        print("No missing art files found.")
        return

    print("Missing files:")
    for item in missing:
        print(
            json.dumps(
                {
                    "file": item.file_name,
                    "src": item.web_src,
                    "sort_date": item.sort_date.date().isoformat(),
                    "sort_date_source": item.sort_date_source,
                    "display_date": item.display_date,
                    "width": item.width,
                    "height": item.height,
                    "title_guess": item.title_guess,
                }
            )
        )

    print("\nStarter objects:")
    for item in missing:
        print("{")
        print(f"  src: '{item.web_src}',")
        print(f"  title: '{item.title_guess}',")
        print(f"  date: '{item.display_date}',")
        print("  description: '',")
        print(f"  width: {item.width if item.width is not None else 0},")
        print(f"  height: {item.height if item.height is not None else 0},")
        print("},")


def main() -> None:
    print_report(build_missing_art())


if __name__ == "__main__":
    main()
