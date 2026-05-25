"use client";
interface PhaseTabProps {
  phaseNumber: number;
  phaseName: string;
  weeksCompleted: number;
  totalWeeks: number;
  percent: number;
  color: string;
  isActive: boolean;
  onClick: () => void;
}
export default function PhaseTab({
  phaseNumber,
  phaseName,
  weeksCompleted,
  totalWeeks,
  percent,
  color,
  isActive,
  onClick,
}: PhaseTabProps) {
  return (
    <div
      className="cursor-pointer rounded-lg p-4 min-w-40 shrink-0 border"
      style={{
        borderColor: 'var(--border)',
          borderTopColor: color,
          borderTopWidth: '3px',
        background: isActive ? "var(--surface-2)" : "var(--surface)",
      }}
      onClick={onClick}
    >
      <div
        className="mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ background: color }}
      >
        P{phaseNumber}
      </div>
      <h3 className="text-sm font-semibold">{phaseName}</h3>
      <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
        {weeksCompleted}/{totalWeeks} wk . {percent}%
      </p>
    </div>
  );
}
