# Tiny Delegation

> **TinyManager Module · Foundation**  
> کار سپرده‌شده را از «گفتم انجام بده» تا «واقعاً تمام شد» قابل پیگیری کن.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-Send-2563EB)
![License](https://img.shields.io/badge/License-MIT-111827)

## هدف

**Tiny Delegation** برای مدیرانی است که کار را به دیگران واگذار می‌کنند و نمی‌خواهند وضعیت آن داخل چت، تماس یا حافظه شخصی گم شود.

سه سؤال پایه:

```text
چه کاری؟
به چه کسی؟
تا چه زمانی؟
```

اما برای Delegation خوب، این سه مورد کافی نیست؛ باید پذیرش، وضعیت، موعد Check-in و نتیجه نهایی هم قابل مشاهده باشد.

## دامنه نسخه اول

- عنوان و شرح کار
- Assignee
- Delegated at
- Due date
- Check-in date
- Priority
- وضعیت Delegated / Acknowledged / In Progress / Waiting / Done
- نتیجه مورد انتظار
- یادداشت پیگیری
- تشخیص Overdue
- کارهای نیازمند Check-in امروز
- فارسی/English
- RTL/LTR
- Local-first
- JSON / CSV export

## Dashboard Widget

```text
تفویض‌ها
9 فعال
2 عقب‌افتاده
3 نیازمند پیگیری امروز
```

## TinyManager Integration

- Shared People
- Shared Projects
- Core Date Service
- Notifications
- Dashboard Widget
- Shared Backup

## Module Identity

```text
ID:       tiny-delegation
Icon:     Send (Lucide)
Category: execution
Route:    /modules/delegation
Status:   Foundation
```

## اصل محصول

Delegation Tracker نباید تبدیل به Task Manager عمومی شود. تمرکز آن فقط روی **کاری است که مدیر به شخص دیگری سپرده و هنوز نسبت به نتیجه آن مسئولیت مدیریتی دارد**.

## Roadmap

- [x] تعریف دامنه و Manifest
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
