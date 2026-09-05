export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-delegation',
  version: '0.1.0-alpha.1',
  name: { fa: 'تفویض کار', en: 'Delegation' },
  description: { fa: 'ثبت و پیگیری کارهای سپرده‌شده با کمترین ورودی مدیر.', en: 'Track delegated work with minimal manager input.' },
  icon: 'Send',
  route: '/modules/delegation',
  category: 'execution',
  maturity: 'alpha',
  capabilities: { dashboardWidget: true, globalSearch: true, exportData: true, sharedPeople: true, sharedProjects: true, notifications: true, assistantActions: true },
  assistantActions: ['tiny-delegation.create','tiny-delegation.complete','tiny-delegation.follow-up'],
} as const;
