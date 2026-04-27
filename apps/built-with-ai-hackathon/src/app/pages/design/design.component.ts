import { Component } from '@angular/core';
import {
  EventDayContent,
  EventDayLayoutComponent,
} from '../event-day-layout.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [EventDayLayoutComponent],
  template: `<app-event-day-layout [content]="content" />`,
})
export class DesignComponent {
  readonly content: EventDayContent = {
    theme: 'green',
    badgeClass: 'day-badge--green',
    badge: 'Day 2',
    role: 'The Visionary',
    title: 'Design Thinking',
    date: 'June 30, 2025',
    promise:
      'Use AI to translate product intent into prototypes, UI blueprints, and a shared design-to-code workflow.',
    summaryLabel: 'Design-to-Code Day',
    summary:
      'Developers learn to think in UX while designers learn to prototype closer to code. The focus is cross-disciplinary collaboration, not static handoff.',
    aboutEyebrow: 'AI-Augmented Design',
    aboutTitle: 'Make the product visible before the engineering sprint.',
    about: [
      'Day 2 turns the strategy work into tangible product experience. Teams use AI as a bridge between visual thinking, accessibility, interaction design, and implementation constraints.',
      'The day is intentionally cross-role: designers gain more influence over code, while developers build empathy for UX tradeoffs and prototype decisions.',
    ],
    leadersTitle: 'Section Leader',
    leaders: ['TBA'],
    trainersTitle: 'Trainers',
    trainers: ['Adrian Romański', 'Julia Rapczyńska'],
    outcomesTitle: 'What teams leave with',
    outcomes: [
      {
        icon: 'palette',
        title: 'UI direction',
        body: 'A clearer visual language and interaction direction for the product idea.',
      },
      {
        icon: 'integration_instructions',
        title: 'Prototype blueprint',
        body: 'A bridge between mockups and frontend work that engineers can build from.',
      },
      {
        icon: 'groups',
        title: 'Shared empathy',
        body: 'A better understanding of what design decisions require from code and infrastructure.',
      },
    ],
    stepsTitle: 'From product intent to UI blueprint',
    steps: [
      {
        title: 'Translate the MVP',
        body: 'Turn Day 1 artifacts into user flows, screens, and core interaction needs.',
      },
      {
        title: 'Prototype with AI',
        body: 'Use AI tools to rapidly explore structure, content hierarchy, and component ideas.',
      },
      {
        title: 'Stress-test the experience',
        body: 'Review accessibility, clarity, edge cases, and cross-role implementation friction.',
      },
      {
        title: 'Prepare for build',
        body: 'Leave with UI blueprints that can guide the full-stack engineering days.',
      },
    ],
    highlightIcon: 'psychology',
    highlightTitle: 'AI as a translator between disciplines',
    highlightBody:
      'The goal is not to automate taste. The goal is to lower the barrier between design concepts and implementation reality.',
  };
}
