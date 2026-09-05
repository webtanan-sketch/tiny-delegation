import { describe, expect, it } from 'vitest';
import { TinyDelegationRepository } from './repository';
import type { TinyDelegationStorage } from './types';
class MemoryStorage implements TinyDelegationStorage { private data=new Map<string,unknown>(); async get<T>(k:string){return (this.data.get(k) as T|undefined)??null;} async set<T>(k:string,v:T){this.data.set(k,v);} }
describe('TinyDelegationRepository',()=>{
  it('creates with only task and assignee',async()=>{const r=new TinyDelegationRepository(new MemoryStorage()); const i=await r.create({task:'پیگیری قرارداد',assigneeName:'علی'}); expect(i.status).toBe('open'); expect(i.task).toBe('پیگیری قرارداد');});
  it('completes and follows up',async()=>{const r=new TinyDelegationRepository(new MemoryStorage()); const i=await r.create({task:'Send report',assigneeName:'Sara'}); expect((await r.followUp(i.id))?.lastFollowUpAt).toBeTruthy(); expect((await r.complete(i.id))?.status).toBe('done');});
});
