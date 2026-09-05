import type { CreateTinyDelegationInput, TinyDelegationItem, TinyDelegationStorage } from './types';

export const TINY_DELEGATION_STORAGE_KEY = 'module.tiny-delegation.items';

const makeId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `delegation-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const clean = (value: string): string => value.trim().replace(/\s+/g, ' ');

export class TinyDelegationRepository {
  constructor(private readonly storage: TinyDelegationStorage, private readonly storageKey = TINY_DELEGATION_STORAGE_KEY) {}

  async list(): Promise<TinyDelegationItem[]> {
    return (await this.storage.get<TinyDelegationItem[]>(this.storageKey)) ?? [];
  }

  async create(input: CreateTinyDelegationInput): Promise<TinyDelegationItem> {
    const task = clean(input.task);
    const assigneeName = clean(input.assigneeName);
    if (!task) throw new Error('Delegated task is required.');
    if (!assigneeName) throw new Error('Delegation assignee is required.');

    const now = new Date().toISOString();
    const item: TinyDelegationItem = {
      id: makeId(), task, assigneeName, priority: input.priority ?? 'normal', status: 'open', createdAt: now, updatedAt: now,
      ...(input.personId ? { personId: input.personId } : {}), ...(input.projectId ? { projectId: input.projectId } : {}),
      ...(input.dueAt ? { dueAt: input.dueAt } : {}), ...(input.note?.trim() ? { note: input.note.trim() } : {}),
    };
    const items = await this.list();
    await this.storage.set(this.storageKey, [item, ...items]);
    return item;
  }

  async complete(id: string): Promise<TinyDelegationItem | null> {
    const items = await this.list();
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return null;
    const current = items[index];
    if (!current) return null;
    const now = new Date().toISOString();
    const updated: TinyDelegationItem = { ...current, status: 'done', completedAt: now, updatedAt: now };
    const next = [...items]; next[index] = updated; await this.storage.set(this.storageKey, next); return updated;
  }

  async followUp(id: string): Promise<TinyDelegationItem | null> {
    const items = await this.list();
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return null;
    const current = items[index];
    if (!current) return null;
    const now = new Date().toISOString();
    const updated: TinyDelegationItem = { ...current, lastFollowUpAt: now, updatedAt: now };
    const next = [...items]; next[index] = updated; await this.storage.set(this.storageKey, next); return updated;
  }

  async remove(id: string): Promise<boolean> {
    const items = await this.list(); const next = items.filter((item) => item.id !== id);
    if (next.length === items.length) return false; await this.storage.set(this.storageKey, next); return true;
  }
}
