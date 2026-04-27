import { Component } from '@angular/core';
import {
  EventDayContent,
  EventDayLayoutComponent,
} from '../event-day-layout.component';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [EventDayLayoutComponent],
  template: `<app-event-day-layout [content]="content" />`,
})
export class HackathonComponent {
  readonly content: EventDayContent = {
    theme: 'purple',
    badgeClass: 'day-badge--purple',
    badge: 'Day 6',
    role: 'Product Developer',
    title: 'Hackathon',
    date: 'July 4, 2025',
    promise:
      'The ultimate test: cross-functional teams build agentic systems for inventive product challenges and launch a real demo.',
    summaryLabel: 'Grand Finale',
    summary:
      'Teams use the previous five days of product, design, engineering, and cloud practice to build systems that solve creative problem-solving tasks in a tangible way.',
    aboutEyebrow: 'Agentic Systems for Inventive Design',
    aboutTitle: 'Build something real, creative, and judgeable.',
    about: [
      'The previous Bielik TRIZ workshop becomes the live reference architecture. During the hackathon, teams implement related inventive methods as tools, MCP servers, or external services.',
      'Tasks can include Ishikawa Diagram, de Bono Six Thinking Hats, Physical Contradiction resolution, and open-ended inventive challenges. Teams may add image generation to make solution concepts tangible.',
    ],
    leadersTitle: 'Section Leaders',
    leaders: ['Marek Mysior', 'Dawid Perdek'],
    trainersTitle: 'Team Leaders',
    trainers: ['Adrian Romański', 'Julia Rapczyńska'],
    outcomesTitle: 'What teams are judged on',
    outcomes: [
      {
        icon: 'architecture',
        title: 'Technical design',
        body: 'A credible agentic-system architecture with a clear implementation choice.',
      },
      {
        icon: 'emoji_objects',
        title: 'Creative solution quality',
        body: 'Inventive outputs that are useful, original, and grounded in the task.',
      },
      {
        icon: 'rocket_launch',
        title: 'Working demonstration',
        body: 'A tangible prototype, repository, or uploaded artifact the panel can evaluate.',
      },
    ],
    stepsTitle: 'From challenge to final demo',
    steps: [
      {
        title: 'Choose a task',
        body: 'Pick from several prepared inventive-design challenges or an open category.',
      },
      {
        title: 'Design the system',
        body: 'Decide whether methods live inside the agent, as MCP servers, or as external services.',
      },
      {
        title: 'Build and integrate',
        body: 'Create the tools, connect models, optionally add image generation, and make the flow demonstrable.',
      },
      {
        title: 'Submit and pitch',
        body: 'Present the architecture, the solution quality, and the working prototype to the judges.',
      },
    ],
    highlightIcon: 'gavel',
    highlightTitle: 'Fair judging needs a common frame',
    highlightBody:
      'Teams can build different ideas, but submissions should share acceptance criteria around architecture, creativity, tangible output, and attendee-owned IP.',
  };
}
