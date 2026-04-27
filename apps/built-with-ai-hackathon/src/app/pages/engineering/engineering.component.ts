import { Component } from '@angular/core';
import {
  EventDayContent,
  EventDayLayoutComponent,
} from '../event-day-layout.component';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [EventDayLayoutComponent],
  template: `<app-event-day-layout [content]="content" />`,
})
export class EngineeringComponent {
  readonly content: EventDayContent = {
    theme: 'yellow',
    badgeClass: 'day-badge--yellow',
    badge: 'Days 3-4',
    role: 'The Builder',
    title: 'Software Engineer on Steroids',
    date: 'July 1-2, 2025',
    promise:
      'Build the application layer while AI helps every role understand architecture, logic, accessibility, and delivery quality.',
    summaryLabel: 'Full-Stack Build Days',
    summary:
      'These two days move from prototype to working product. The stack centers on Angular and backend development, with AI helping teams reason across frontend, backend, and product constraints.',
    aboutEyebrow: 'Full-Stack Engineering',
    aboutTitle: 'From design intent to working product systems.',
    about: [
      'This is not just for coders. Designers see how product experience turns into implementation, and DevOps-oriented participants gain deeper context for the application layer they will later ship.',
      'The work emphasizes robust, accessible systems, practical architecture decisions, and AI-assisted engineering workflows that keep the team moving without hiding the fundamentals.',
    ],
    leadersTitle: 'Section Leader',
    leaders: ['Adrian Romański'],
    trainersTitle: 'Trainers',
    trainers: ['Dominika Zając', 'Julia Rapczyńska', 'Greg Radzio'],
    outcomesTitle: 'What teams leave with',
    outcomes: [
      {
        icon: 'web',
        title: 'Angular application layer',
        body: 'A functioning frontend shaped by the strategy and design artifacts.',
      },
      {
        icon: 'settings_ethernet',
        title: 'Backend logic',
        body: 'Service boundaries and product logic that make the prototype real.',
      },
      {
        icon: 'verified',
        title: 'Quality habits',
        body: 'Accessibility, maintainability, and AI-assisted debugging patterns.',
      },
    ],
    stepsTitle: 'From prototype to product build',
    steps: [
      {
        title: 'Set the architecture',
        body: 'Translate roadmap and UX artifacts into application boundaries and first slices.',
      },
      {
        title: 'Build the frontend',
        body: 'Implement core flows and components with Angular and accessible UI patterns.',
      },
      {
        title: 'Connect the backend',
        body: 'Add server-side logic and data flow needed for a credible product demo.',
      },
      {
        title: 'Use AI in the loop',
        body: 'Apply AI for explanation, refactoring, tests, debugging, and cross-role understanding.',
      },
    ],
    highlightIcon: 'bolt',
    highlightTitle: 'AI accelerates, but architecture still matters',
    highlightBody:
      'The goal is to become a stronger product engineer, not a prompt operator. Participants learn why the system is shaped the way it is.',
  };
}
