# Tiny Delegation

> **TinyManager Module · Foundation**  
> Track delegated work from “I assigned it” to “it is actually done.”

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-Send-2563EB)
![License](https://img.shields.io/badge/License-MIT-111827)

## Purpose

**Tiny Delegation** is for managers who assign work to other people and do not want its status to disappear inside chat, calls or memory.

The basic questions are:

```text
What?
Who?
By when?
```

Good delegation also needs acknowledgement, current status, check-in timing and an explicit expected result.

## First-release scope

- task title and description
- assignee
- delegated-at date
- due date
- check-in date
- priority
- Delegated / Acknowledged / In Progress / Waiting / Done workflow
- expected outcome
- follow-up notes
- overdue detection
- “check in today” filter
- Persian / English
- RTL / LTR
- local-first persistence
- JSON / CSV export

## Dashboard widget

```text
Delegations
9 active
2 overdue
3 check-ins today
```

## TinyManager integration

- Shared People
- Shared Projects
- Core Date Service
- Notifications
- Dashboard Widget
- Shared Backup

## Module identity

```text
ID:       tiny-delegation
Icon:     Send (Lucide)
Category: execution
Route:    /modules/delegation
Status:   Foundation
```

## Product boundary

This module should not become a generic task manager. It is specifically for **work a manager delegated to somebody else while remaining accountable for the outcome**.

## Roadmap

- [x] Define scope and manifest
- [ ] Delegation domain model
- [ ] Status workflow
- [ ] Check-in rules
- [ ] Dashboard widget
- [ ] Shared People adapter
- [ ] Notifications
- [ ] Standalone mode
- [ ] Export
- [ ] Tests + CI
- [ ] TinyManager integration

## License

MIT © 2026 Webtanan
