import Dexie, { type Table } from 'dexie'
import type {
  WeekTarget,
  Job,
  DSAProblem,
  LogEntry,
  Skill,
  Tactic,
  PrepEntry,
  Resource,
} from './types'

class JobRadarDB extends Dexie {
  weekTargets!: Table<WeekTarget>
  jobs!: Table<Job>
  dsaProblems!: Table<DSAProblem>
  logEntries!: Table<LogEntry>
  skills!: Table<Skill>
  tactics!: Table<Tactic>
  prepEntries!: Table<PrepEntry>
  resources!: Table<Resource>

  constructor() {
    super('jobradar-pro')
    this.version(1).stores({
      weekTargets: '++id, phase, weekNumber, status',
      jobs:        '++id, company, tier, status, source, dateApplied',
      dsaProblems: '++id, pattern, difficulty, status, name',
      logEntries:  '++id, date, focusArea',
      skills:      '++id, category, priority, status',
      tactics:     '++id, category, done',
      prepEntries: '++id, section, company',
      resources:   '++id, category, name',
    })
  }
}

export const db = new JobRadarDB()

// ── Helper to reset the entire database (for dev/testing) ────────────────────
export async function resetDatabase(): Promise<void> {
  await db.weekTargets.clear()
  await db.jobs.clear()
  await db.dsaProblems.clear()
  await db.logEntries.clear()
  await db.skills.clear()
  await db.tactics.clear()
  await db.prepEntries.clear()
  await db.resources.clear()
  localStorage.removeItem('jobradar-seed-version')
}