export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-delegation',
  version: '0.1.0-foundation',
  name: { fa: 'تفویض کار', en: 'Delegation' },
  description: {
    fa: 'ثبت و پیگیری کارهایی که مدیر به دیگران سپرده است.',
    en: 'Track work a manager has delegated to other people.',
  },
  icon: 'Send',
  route: '/modules/delegation',
  category: 'execution',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: true,
    globalSearch: true,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: true,
    assistantActions: true,
  },
  plannedAssistantActions: [
    'tiny-delegation.create',
    'tiny-delegation.update-status',
    'tiny-delegation.follow-up',
  ],
} as const;
