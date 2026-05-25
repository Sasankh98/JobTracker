'use client'

import { useState } from 'react';
import PhaseTab from "@/components/weekly/PhaseTab";

const phases = [
  { phaseNumber: 1, phaseName: 'Foundation',    color: 'var(--phase-1)', weeksCompleted: 3, totalWeeks: 8,  percent: 100 },
  { phaseNumber: 2, phaseName: 'DSA Sprint',    color: 'var(--phase-2)', weeksCompleted: 6, totalWeeks: 6,  percent: 100 },
  { phaseNumber: 3, phaseName: 'System Design', color: 'var(--phase-3)', weeksCompleted: 4, totalWeeks: 4,  percent: 100 },
  { phaseNumber: 4, phaseName: 'Backend Deep',  color: 'var(--phase-4)', weeksCompleted: 3, totalWeeks: 5,  percent: 60  },
  { phaseNumber: 5, phaseName: 'Cloud / Infra', color: 'var(--phase-5)', weeksCompleted: 0, totalWeeks: 4,  percent: 0   },
  { phaseNumber: 6, phaseName: 'Frontend Master', color: 'var(--phase-6)', weeksCompleted: 0, totalWeeks: 5, percent: 0  },
  { phaseNumber: 7, phaseName: 'Applications',  color: 'var(--phase-7)', weeksCompleted: 0, totalWeeks: 6,  percent: 0   },
  { phaseNumber: 8, phaseName: 'Negotiation',   color: 'var(--phase-8)', weeksCompleted: 0, totalWeeks: 6,  percent: 0   },
]
export default function WeeklyPage() {
  const [activePhase, setActivePhase] = useState('Phase 1');
  return (
    <div className='p-6'>
    <div className="flex gap-3 overflow-x-auto pb-2">
      {phases.map((phase) => (
        <PhaseTab
          key={phase.phaseNumber}
          phaseNumber={phase.phaseNumber}
          phaseName={phase.phaseName}
          weeksCompleted={phase.weeksCompleted}
          totalWeeks={phase.totalWeeks}
          percent={phase.percent}
          color={phase.color}
          isActive={activePhase === `Phase ${phase.phaseNumber}`}
          onClick= {()=> setActivePhase(`Phase ${phase.phaseNumber}`)}
        />
      ))}
      </div>
    </div>
  );
}
