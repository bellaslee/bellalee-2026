import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { FloatingDoodles } from './floating-doodles';

const DOODLE_FILE_PATTERN = /^doodle(\d+)\.(png|jpe?g|webp|svg)$/i;

async function getDoodleAssetCandidates() {
  const doodlesDirectory = path.join(process.cwd(), 'public', 'doodles');

  try {
    const filenames = await readdir(doodlesDirectory);

    return filenames
      .map((filename) => {
        const match = filename.match(DOODLE_FILE_PATTERN);

        if (!match) {
          return null;
        }

        return {
          filename,
          index: Number.parseInt(match[1], 10),
        };
      })
      .filter((entry): entry is { filename: string; index: number } => entry !== null)
      .sort((left, right) => left.index - right.index)
      .map((entry) => `/doodles/${entry.filename}`);
  } catch {
    return [];
  }
}

export async function FloatingDoodlesLayer() {
  const assetCandidates = await getDoodleAssetCandidates();

  return <FloatingDoodles assetCandidates={assetCandidates} />;
}
