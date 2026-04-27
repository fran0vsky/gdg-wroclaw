import { Component } from '@angular/core';
import {
  EventDayContent,
  EventDayLayoutComponent,
} from '../event-day-layout.component';

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [EventDayLayoutComponent],
  template: `
    <app-event-day-layout [content]="content" />
  `,
})
export class StrategyComponent {
  readonly content: EventDayContent = {
    theme: 'blue',
    badgeClass: 'day-badge--blue',
    badge: 'Day 1',
    role: 'The Architect',
    title: 'Strategy & Fundamentals',
    date: 'June 29, 2025',
    promise:
      'Turn a fuzzy product idea into a shared mission, a defined MVP, and a backlog the whole squad understands.',
    summaryLabel: 'Foundation Day',
    summary:
      'Participants define personas, problems, context, KPIs, value, cost, MVP scope, and roadmap before using AI as an accelerator.',
    aboutEyebrow: 'Product Strategy',
    aboutTitle: 'A shared product language before anyone writes code.',
    about: [
      'The marathon starts by dissolving role boundaries. Designers, developers, DevOps engineers, and product architects work in the same context so they can make decisions together instead of handing work over a wall.',
      'AI is used consciously: not to skip product thinking, but to speed up backlog shaping, prototype exploration, process mapping, and team alignment.',
    ],
    leadersTitle: 'Section Leader',
    leaders: ['Dawid Perdek'],
    trainersTitle: 'Trainers',
    trainers: ['Natalia Kierczuk', 'Waqas S Jutt'],
    resources: [
      {
        label: 'Miro Board Template',
        href: 'https://miro.com/app/board/uXjVHdWwqRA=/',
      },
    ],
    outcomesTitle: 'What teams leave with',
    outcomes: [
      {
        icon: 'person_search',
        title: 'Persona and problem definition',
        body: 'A clear target user, pain points, context, and problem statement.',
      },
      {
        icon: 'account_tree',
        title: 'MVP and roadmap',
        body: 'A thin product path grounded in value, cost, KPIs, and priority.',
      },
      {
        icon: 'view_kanban',
        title: 'Kanban-ready backlog',
        body: 'A working board of tasks that teams can carry into the build days.',
      },
    ],
    stepsTitle: 'From idea to buildable scope',
    steps: [
      {
        title: 'Frame the user and pain',
        body: 'Define persona, pain points, problem, and real-world context.',
      },
      {
        title: 'Map the process',
        body: 'Use BPMN, event mapping, or design thinking to expose the moving parts.',
      },
      {
        title: 'Set value and measures',
        body: 'Define KPIs, value, costs, and what makes the MVP worth shipping.',
      },
      {
        title: 'Prototype and plan',
        body: 'Create a visual prototype and turn decisions into a practical roadmap.',
      },
    ],
    highlightIcon: 'auto_awesome',
    highlightTitle: 'AI as a product-thinking partner',
    highlightBody:
      'Every step can be accelerated with LLMs, but the point is to understand the purpose first and then use AI deliberately.',
  };
}
