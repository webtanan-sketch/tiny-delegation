export type TinyDelegationStatus = 'open' | 'done' | 'cancelled';
export type TinyDelegationPriority = 'normal' | 'high';

export interface TinyDelegationItem {
  id: string;
  task: string;
  assigneeName: string;
  personId?: string;
  projectId?: string;
  dueAt?: string;
  note?: string;
  priority: TinyDelegationPriority;
  status: TinyDelegationStatus;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  lastFollowUpAt?: string;
}

export interface CreateTinyDelegationInput {
  task: string;
  assigneeName: string;
  personId?: string;
  projectId?: string;
  dueAt?: string;
  note?: string;
  priority?: TinyDelegationPriority;
}

export interface TinyDelegationStorage {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
}
