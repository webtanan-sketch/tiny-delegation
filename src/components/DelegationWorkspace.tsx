import { Check, Clock3, Send, UserRound } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { TinyDelegationRepository } from '../domain/repository';
import type { TinyDelegationItem, TinyDelegationStorage } from '../domain/types';

export interface DelegationWorkspaceProps { locale:'fa'|'en'; direction:'rtl'|'ltr'; storage:TinyDelegationStorage; }
export function DelegationWorkspace({locale,direction,storage}:DelegationWorkspaceProps){
  const repo=useMemo(()=>new TinyDelegationRepository(storage),[storage]);
  const [items,setItems]=useState<TinyDelegationItem[]>([]); const [task,setTask]=useState(''); const [assignee,setAssignee]=useState(''); const [busy,setBusy]=useState(false);
  const reload=async()=>setItems(await repo.list()); useEffect(()=>{void reload();},[repo]);
  const submit=async(e:FormEvent)=>{e.preventDefault(); if(!task.trim()||!assignee.trim()||busy)return; setBusy(true); try{await repo.create({task,assigneeName:assignee});setTask('');setAssignee('');await reload();}finally{setBusy(false)}};
  const open=items.filter(i=>i.status==='open'), done=items.filter(i=>i.status==='done');
  return <section className="td-workspace" dir={direction} lang={locale}>
    <header><div><span>{locale==='fa'?'اجرای کار':'EXECUTION'}</span><h2>{locale==='fa'?'تفویض کار':'Delegation'}</h2><p>{locale==='fa'?'فقط کار و شخص را ثبت کن؛ بقیه اطلاعات اختیاری است.':'Enter only the task and person; everything else is optional.'}</p></div><Send size={28}/></header>
    <form className="td-quick" onSubmit={submit}><input value={task} onChange={e=>setTask(e.currentTarget.value)} placeholder={locale==='fa'?'چه کاری را سپردی؟':'What did you delegate?'} /><input value={assignee} onChange={e=>setAssignee(e.currentTarget.value)} placeholder={locale==='fa'?'به چه کسی؟':'To whom?'} /><button disabled={busy||!task.trim()||!assignee.trim()}>{locale==='fa'?'ثبت':'Add'}</button></form>
    <div className="td-summary"><strong>{open.length}</strong><span>{locale==='fa'?'باز':'open'}</span><strong>{done.length}</strong><span>{locale==='fa'?'انجام‌شده':'done'}</span></div>
    <div className="td-list">{open.map(item=><article key={item.id}><div className="td-person"><UserRound size={16}/><span>{item.assigneeName}</span></div><h3>{item.task}</h3><div className="td-actions"><button onClick={async()=>{await repo.followUp(item.id);await reload();}}><Clock3 size={15}/>{locale==='fa'?'پیگیری شد':'Followed up'}</button><button onClick={async()=>{await repo.complete(item.id);await reload();}}><Check size={15}/>{locale==='fa'?'انجام شد':'Done'}</button></div></article>)}</div>
  </section>
}
