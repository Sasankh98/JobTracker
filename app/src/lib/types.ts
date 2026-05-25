
export type WeekStatus = 'Done' | 'Partial' | 'Missed' | 'In Progress' | 'Not Started';
export type JobStatus = 'Applied' | 'Interview' | 'Offer' | 'Rejected' | 'Withdrawn' | 'Awaiting Response';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type DSAStatus = 'Solved' | 'Review' | 'To Do' | 'Skip';
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';
export type SkillStatus = 'Not Started' | 'In Progress' | 'Done';
export type TacticDone = 'Yes' | 'No' | 'In Progress';
export type Tier = 'Tier A' | 'Tier B' | 'Tier C';

export interface WeekTarget { id: number; week: string; phase: string; weekNumber: number;lcTarget: number;mockInterviews: number;githubProjects: number;status: string; deliverable: string; }
export interface Job { id?: number; company: string; role: string; tier: Tier; }
export interface DSAProblem { id?: number; name: string; pattern: string; status: string; difficulty: string; url: string; notes: string;}
export interface LogEntry { id?: number; date: string; focusArea: string; }
export interface Skill { id?: number; name: string; category: string; why: string; targetCompanies: string[]; resource: string; resourceLabel: string; priority: string; status: string;}
export interface Tactic { id?: number; name: string; category: string; detail: string; link: string; done: string; }
export interface PrepEntry { id?: number; section: string; company: string; whatToPrepare: string; reportedQuestions: string; }
export interface Resource { id?: number; category: string; name: string; url: string; type: string; }
