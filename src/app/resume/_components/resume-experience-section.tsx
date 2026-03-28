'use client';

import { useState } from 'react';
import {
  experienceSkillFilters,
  experienceItems,
} from '../resume.content';
import { ResumeExperienceCard } from './resume-experience-card';
import { ResumeSkillChip } from './resume-skill-chip';

export function ResumeExperienceSection() {
  const [expandedRoleId, setExpandedRoleId] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(
    null,
  );

  const filteredExperience = selectedSkill
    ? experienceItems.filter((item) =>
        item.skills.includes(selectedSkill),
      )
    : experienceItems;

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">
          Filter by skill
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ResumeSkillChip
            label="All roles"
            isActive={selectedSkill === null}
            onClick={() => setSelectedSkill(null)}
          />
          {experienceSkillFilters.map((skill) => (
            <ResumeSkillChip
              key={skill}
              label={skill}
              isActive={selectedSkill === skill}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-5">
        {filteredExperience.map((item) => (
          <ResumeExperienceCard
            key={item.id}
            item={item}
            isExpanded={expandedRoleId === item.id}
            onToggle={() =>
              setExpandedRoleId((current) => (current === item.id ? '' : item.id))
            }
            onSelectSkill={setSelectedSkill}
          />
        ))}
      </div>
    </div>
  );
}
