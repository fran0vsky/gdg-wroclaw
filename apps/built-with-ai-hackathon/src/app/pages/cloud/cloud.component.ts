import { Component } from '@angular/core';
import {
  EventDayContent,
  EventDayLayoutComponent,
} from '../event-day-layout.component';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [EventDayLayoutComponent],
  template: `<app-event-day-layout [content]="content" />`,
})
export class CloudComponent {
  readonly content: EventDayContent = {
    theme: 'red',
    badgeClass: 'day-badge--red',
    badge: 'Day 5',
    role: 'The Shipper',
    title: 'Cloud & Deployment',
    date: 'July 3, 2025',
    promise:
      'Demystify Google Cloud, deploy real product pieces, and build an agentic TRIZ system powered by Bielik and Gemma models.',
    summaryLabel: 'Shipping Day',
    summary:
      'Everyone becomes a shipper. The team learns the easiest practical path for frontend and backend deployment, then explores logs, monitoring, Cloud Run, MCP, and agentic systems.',
    aboutEyebrow: 'Cloud, DevOps & Scaling',
    aboutTitle: 'Make the product real enough to run, observe, and improve.',
    about: [
      'Day 5 connects the build with deployment. Participants see how the product lives outside the editor: infrastructure, logs, monitoring, scaling, and operational confidence.',
      'The Bielik TRIZ workshop turns the cloud session into a concrete agentic-system build: participants connect an ADK-style agent with their own MCP server to solve Technical Contradictions.',
    ],
    leadersTitle: 'Section Leader',
    leaders: ['Marek Mysior'],
    trainersTitle: 'Trainers',
    trainers: ['jacekkubiak@google.com', 'mokshazna@google.com'],
    resources: [
      {
        label: 'Bielik TRIZ overview',
        href: 'https://github.com/mmysior/bielik-triz/tree/main',
      },
    ],
    outcomesTitle: 'What teams leave with',
    outcomes: [
      {
        icon: 'cloud_done',
        title: 'Deployment path',
        body: 'A practical route for frontend and backend deployment on Google Cloud.',
      },
      {
        icon: 'monitor_heart',
        title: 'Operational visibility',
        body: 'A first pass at logs, monitoring, and understanding production behavior.',
      },
      {
        icon: 'smart_toy',
        title: 'TRIZ agent system',
        body: 'An agent connected to an MCP server for Technical Contradiction resolution.',
      },
    ],
    stepsTitle: 'From deployment to agentic workshop',
    steps: [
      {
        title: 'Ship the app path',
        body: 'Deploy frontend and backend through the simplest Google Cloud route available.',
      },
      {
        title: 'Observe runtime behavior',
        body: 'Inspect live logs and monitoring signals to understand what shipped software is doing.',
      },
      {
        title: 'Build the MCP server',
        body: 'Expose the TRIZ Technical Contradiction algorithm as a tool on Cloud Run.',
      },
      {
        title: 'Connect the agent',
        body: 'Use Bielik, EmbeddingGemma, BM25, and Gemma to move from contradiction to solution concepts.',
      },
    ],
    highlightIcon: 'hub',
    highlightTitle: 'Bielik workshop: TRIZ as an agentic system',
    highlightBody:
      'Participants do not need prior TRIZ knowledge. The full algorithm is provided, and the engineering challenge is to build the system that implements it.',
  };
}
