import type {
  WeekStatus,
  JobStatus,
  Difficulty,
  DSAStatus,
  Priority,
  SkillStatus,
  TacticDone,
  Tier,
} from './types'

// ── Phases ───────────────────────────────────────────────────────────────────
export const PHASES = [
  {
    id: 'Phase 1',
    label: 'Foundation: Resume + DSA + Apply',
    months: 'Months 1–2',
    weeks: [1, 2, 3, 4, 5, 6, 7, 8],
    salaryUnlock: 'Rs.22–26L possible',
    color: 'var(--phase-1)',
    bg: 'var(--phase-1-bg)',
  },
  {
    id: 'Phase 2',
    label: 'Deep Tech: Next.js + NestJS + Docker + Redis + GraphQL',
    months: 'Month 3',
    weeks: [9, 10, 11, 12, 13],
    salaryUnlock: 'Rs.24–28L unlocked',
    color: 'var(--phase-2)',
    bg: 'var(--phase-2-bg)',
  },
  {
    id: 'Phase 3',
    label: 'System Design: HLD + LLD + Frontend SD',
    months: 'Month 4',
    weeks: [14, 15, 16, 17, 18],
    salaryUnlock: 'Rs.26–30L unlocked',
    color: 'var(--phase-3)',
    bg: 'var(--phase-3-bg)',
  },
  {
    id: 'Phase 4',
    label: 'DSA Mastery 150+ Problems + Machine Coding',
    months: 'Month 5',
    weeks: [19, 20, 21, 22],
    salaryUnlock: 'Rs.28–32L unlocked',
    color: 'var(--phase-4)',
    bg: 'var(--phase-4-bg)',
  },
  {
    id: 'Phase 5',
    label: 'AI/LLM + Azure + AWS SAA + E2E Testing',
    months: 'Month 6',
    weeks: [23, 24, 25, 26, 27],
    salaryUnlock: 'Rs.30–35L unlocked',
    color: 'var(--phase-5)',
    bg: 'var(--phase-5-bg)',
  },
  {
    id: 'Phase 6',
    label: 'Portfolio Polish + OSS + Technical Content',
    months: 'Month 7',
    weeks: [28, 29, 30, 31],
    salaryUnlock: 'Rs.32–40L unlocked',
    color: 'var(--phase-6)',
    bg: 'var(--phase-6-bg)',
  },
  {
    id: 'Phase 7',
    label: 'Mock Sprint + Referral Campaign + Tier A Applications',
    months: 'Month 8',
    weeks: [32, 33, 34, 35],
    salaryUnlock: 'Rs.35–45L unlocked',
    color: 'var(--phase-7)',
    bg: 'var(--phase-7-bg)',
  },
  {
    id: 'Phase 8',
    label: 'Full Interview Loops + Negotiation + Offer Close',
    months: 'Month 9',
    weeks: [36, 37, 38, 39],
    salaryUnlock: 'Rs.35–55L offer',
    color: 'var(--phase-8)',
    bg: 'var(--phase-8-bg)',
  },
] as const

// ── Salary milestones ─────────────────────────────────────────────────────────
export const SALARY_MILESTONES = [
  { label: 'Now', ctc: 'Rs.14.5L', fixed: 'Rs.11.3L', companies: 'PwC India', bg: '#FFEDD5', color: '#EA580C' },
  { label: 'Month 2', ctc: 'Rs.22–24L', fixed: 'Rs.18–20L', companies: 'Mastercard / HSBC', bg: '#D1FAE5', color: '#059669' },
  { label: 'Month 4', ctc: 'Rs.24–28L', fixed: 'Rs.20–23L', companies: 'Freshworks / Postman', bg: '#D1FAE5', color: '#059669' },
  { label: 'Month 5', ctc: 'Rs.28–32L', fixed: 'Rs.23–26L', companies: 'Salesforce / ServiceNow', bg: '#DBEAFE', color: '#2563EB' },
  { label: 'Month 6', ctc: 'Rs.30–35L', fixed: 'Rs.25–29L', companies: 'Wells Fargo / Mastercard', bg: '#EDE9FE', color: '#7C3AED' },
  { label: 'Month 7', ctc: 'Rs.32–40L', fixed: 'Rs.26–33L', companies: 'Razorpay / CRED / PhonePe', bg: '#FEF3C7', color: '#D97706' },
  { label: 'Month 9', ctc: 'Rs.40–55L', fixed: 'Rs.33–45L', companies: 'Amazon / Microsoft / Atlassian', bg: '#FFE4E6', color: '#DC2626' },
] as const

// ── DSA Patterns ──────────────────────────────────────────────────────────────
export const DSA_PATTERNS = [
  'Arrays',
  'Two Pointers',
  'Sliding Window',
  'Binary Search',
  'Stack',
  'Linked List',
  'Trees',
  'Heap',
  'Backtracking',
  'Graphs',
  'DP',
  'Greedy',
  'Trie',
  'Bit Manipulation',
  'SQL',
  'Other',
] as const

export type DSAPattern = (typeof DSA_PATTERNS)[number]

// ── Job sources ───────────────────────────────────────────────────────────────
export const JOB_SOURCES = [
  'LinkedIn',
  'Instahyre',
  'Hirist',
  'Cutshort',
  'Wellfound',
  'Peerlist',
  'Careers page',
  'Naukri',
  'Referral',
  'Topmate',
  'Other',
] as const

// ── Focus areas (daily log) ───────────────────────────────────────────────────
export const FOCUS_AREAS = [
  'DSA',
  'Next.js',
  'NestJS',
  'Docker / Kubernetes',
  'Redis / Kafka',
  'GraphQL',
  'System Design',
  'Azure',
  'AWS',
  'AI / LLM',
  'Job Applications',
  'Mock Interview',
  'Project Work',
  'LinkedIn / Networking',
  'SQL Practice',
  'OSS Contribution',
  'Blog Writing',
] as const

// ── Skill categories ──────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  'Infrastructure',
  'API Design',
  'Testing',
  'Database',
  'Frontend',
  'Cloud',
  'Java',
  'Observability',
  'OSS',
] as const

// ── Tactic categories ─────────────────────────────────────────────────────────
export const TACTIC_CATEGORIES = [
  'Platforms',
  'Community',
  'Referrals',
  'GitHub',
  'Content',
  'Negotiation',
  'Financial',
] as const

// ── Prep sections ─────────────────────────────────────────────────────────────
export const PREP_SECTIONS = [
  'Company Patterns',
  'Frontend System Design',
  'Behavioral',
  'Negotiation',
  'Financial',
] as const

// ── Resource categories ───────────────────────────────────────────────────────
export const RESOURCE_CATEGORIES = [
  'DSA',
  'Next.js',
  'NestJS',
  'Infrastructure',
  'API Design',
  'System Design',
  'Testing',
  'AI / LLM',
  'Cloud Azure',
  'Cloud AWS',
  'Deployment',
  'TypeScript',
  'SQL',
  'JS Practice',
  'Machine Coding',
  'Job Portals',
  'Salary Data',
  'Negotiation',
  'Behavioral',
  'Tools',
  'Content',
  'OSS',
] as const

// ── Color maps ────────────────────────────────────────────────────────────────
export const WEEK_STATUS_COLORS: Record<WeekStatus, { bg: string; text: string; border: string }> = {
  'Done':         { bg: 'var(--done-bg)',         text: 'var(--done-text)',         border: 'var(--done)' },
  'Partial':      { bg: 'var(--partial-bg)',      text: 'var(--partial-text)',      border: 'var(--partial)' },
  'Missed':       { bg: 'var(--missed-bg)',       text: 'var(--missed-text)',       border: 'var(--missed)' },
  'In Progress':  { bg: 'var(--in-progress-bg)', text: 'var(--in-progress-text)', border: 'var(--in-progress)' },
  'Not Started':  { bg: 'var(--not-started-bg)', text: 'var(--not-started-text)', border: 'var(--not-started)' },
}

export const JOB_STATUS_COLORS: Record<JobStatus, { bg: string; text: string }> = {
  'Applied':           { bg: 'var(--applied-bg)',    text: 'var(--applied)' },
  'Interview':         { bg: 'var(--interview-bg)',  text: 'var(--interview)' },
  'Offer':             { bg: 'var(--offer-bg)',       text: 'var(--offer)' },
  'Rejected':          { bg: 'var(--rejected-bg)',   text: 'var(--rejected)' },
  'Withdrawn':         { bg: 'var(--withdrawn-bg)',  text: 'var(--withdrawn)' },
  'Awaiting Response': { bg: 'var(--in-progress-bg)', text: 'var(--in-progress)' },
}

export const DIFFICULTY_COLORS: Record<Difficulty, { bg: string; text: string }> = {
  'Easy':   { bg: 'var(--easy-bg)',   text: 'var(--easy)' },
  'Medium': { bg: 'var(--medium-bg)', text: 'var(--medium)' },
  'Hard':   { bg: 'var(--hard-bg)',   text: 'var(--hard)' },
}

export const DSA_STATUS_COLORS: Record<DSAStatus, { bg: string; text: string }> = {
  'Solved': { bg: 'var(--done-bg)',         text: 'var(--done)' },
  'Review': { bg: 'var(--partial-bg)',      text: 'var(--partial)' },
  'To Do':  { bg: 'var(--not-started-bg)', text: 'var(--not-started)' },
  'Skip':   { bg: 'var(--surface-2)',       text: 'var(--text-muted)' },
}

export const PRIORITY_COLORS: Record<Priority, { bg: string; text: string }> = {
  'Critical': { bg: 'var(--critical-bg)',        text: 'var(--critical)' },
  'High':     { bg: 'var(--high-bg)',             text: 'var(--high)' },
  'Medium':   { bg: 'var(--medium-priority-bg)', text: 'var(--medium-priority)' },
  'Low':      { bg: 'var(--low-bg)',              text: 'var(--low)' },
}

export const SKILL_STATUS_COLORS: Record<SkillStatus, { bg: string; text: string }> = {
  'Not Started': { bg: 'var(--not-started-bg)', text: 'var(--not-started)' },
  'In Progress': { bg: 'var(--in-progress-bg)', text: 'var(--in-progress)' },
  'Done':        { bg: 'var(--done-bg)',         text: 'var(--done)' },
}

export const TACTIC_DONE_COLORS: Record<TacticDone, { bg: string; text: string }> = {
  'Yes':         { bg: 'var(--done-bg)',         text: 'var(--done)' },
  'No':          { bg: 'var(--missed-bg)',        text: 'var(--missed)' },
  'In Progress': { bg: 'var(--in-progress-bg)', text: 'var(--in-progress)' },
}

export const TIER_COLORS: Record<Tier, { bg: string; text: string }> = {
  'Tier A': { bg: 'var(--tier-a-bg)', text: 'var(--tier-a)' },
  'Tier B': { bg: 'var(--tier-b-bg)', text: 'var(--tier-b)' },
  'Tier C': { bg: 'var(--tier-c-bg)', text: 'var(--tier-c)' },
}

// ── Nav items ─────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Dashboard',        href: '/',          icon: 'LayoutDashboard', shortcut: 'G D' },
  { label: 'Weekly Targets',   href: '/weekly',    icon: 'CalendarCheck',   shortcut: 'G W' },
  { label: 'Job Tracker',      href: '/jobs',      icon: 'Briefcase',       shortcut: 'G J' },
  { label: 'DSA Tracker',      href: '/dsa',       icon: 'Code2',           shortcut: 'G L' },
  { label: 'Daily Log',        href: '/log',       icon: 'BookOpen',        shortcut: '' },
  { label: 'Skills Gap',       href: '/skills',    icon: 'TrendingUp',      shortcut: '' },
  { label: 'Job Search Tactics', href: '/tactics', icon: 'Target',          shortcut: '' },
  { label: 'Interview Prep',   href: '/prep',      icon: 'GraduationCap',   shortcut: '' },
  { label: 'Resources',        href: '/resources', icon: 'BookMarked',      shortcut: '' },
] as const

// ── DSA target ────────────────────────────────────────────────────────────────
export const DSA_TARGET = 150
export const TOTAL_WEEKS = 39
export const TOTAL_SKILLS = 12
export const TOTAL_TACTICS = 21