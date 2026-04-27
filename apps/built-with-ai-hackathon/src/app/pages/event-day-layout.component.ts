import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface EventDayContent {
  theme: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  badgeClass: string;
  badge: string;
  role: string;
  title: string;
  date: string;
  promise: string;
  summaryLabel: string;
  summary: string;
  aboutEyebrow: string;
  aboutTitle: string;
  about: string[];
  leadersTitle: string;
  leaders: string[];
  trainersTitle: string;
  trainers: string[];
  resources?: { label: string; href: string }[];
  outcomesTitle: string;
  outcomes: { icon: string; title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  highlightIcon: string;
  highlightTitle: string;
  highlightBody: string;
}

@Component({
  selector: 'app-event-day-layout',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="event-day event-day--{{ content.theme }}">
      <section class="event-day__hero" aria-labelledby="event-day-title">
        <div class="container event-day__hero-grid">
          <div>
            <div class="event-day__kicker">
              <span class="day-badge {{ content.badgeClass }}">{{ content.badge }}</span>
              <span class="event-day__role">{{ content.role }}</span>
            </div>
            <h1 class="event-day__title" id="event-day-title">{{ content.title }}</h1>
            <p class="event-day__subtitle">{{ content.promise }}</p>
            <div class="event-day__meta">
              <span class="chip">
                <span class="material-icons" aria-hidden="true">calendar_today</span>
                {{ content.date }}
              </span>
              <span class="chip">
                <span class="material-icons" aria-hidden="true">location_on</span>
                <span class="chip__location">Google Wrocław Office</span>
              </span>
            </div>
          </div>

          <aside class="event-day__summary-card" aria-label="Day summary">
            <p class="event-day__summary-label">{{ content.summaryLabel }}</p>
            <p>{{ content.summary }}</p>
          </aside>
        </div>
      </section>

      <section class="event-day__section">
        <div class="container event-day__layout">
          <div class="event-day__intro">
            <p class="event-day__eyebrow">{{ content.aboutEyebrow }}</p>
            <h2 class="event-day__heading">{{ content.aboutTitle }}</h2>
            @for (paragraph of content.about; track paragraph) {
              <p class="event-day__body">
                {{ paragraph }}
              </p>
            }

            <div class="event-highlight">
              <span class="material-icons" aria-hidden="true">{{ content.highlightIcon }}</span>
              <div>
                <h3 class="event-highlight__title">{{ content.highlightTitle }}</h3>
                <p class="event-highlight__body">{{ content.highlightBody }}</p>
              </div>
            </div>
          </div>

          <aside class="event-day__sidebar">
            <div class="event-card">
              <h3 class="event-card__title">{{ content.leadersTitle }}</h3>
              @for (leader of content.leaders; track leader) {
                <div class="event-person">
                  <span class="material-icons" aria-hidden="true">person</span>
                  <span>{{ leader }}</span>
                </div>
              }
            </div>

            @if (content.trainers.length) {
              <div class="event-card">
                <h3 class="event-card__title">{{ content.trainersTitle }}</h3>
                @for (trainer of content.trainers; track trainer) {
                  <div class="event-person">
                    <span class="material-icons" aria-hidden="true">co_present</span>
                    <span>{{ trainer }}</span>
                  </div>
                }
              </div>
            }

            @if (content.resources?.length) {
              <div class="event-card">
                <h3 class="event-card__title">Resources</h3>
                @for (resource of content.resources; track resource.href) {
                  <a
                    class="event-resource"
                    [href]="resource.href"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="material-icons" aria-hidden="true">link</span>
                    <span>{{ resource.label }}</span>
                  </a>
                }
              </div>
            }
          </aside>
        </div>
      </section>

      <section class="event-day__section event-day__section--muted">
        <div class="container">
          <p class="event-day__eyebrow">Outcomes</p>
          <h2 class="event-day__heading">{{ content.outcomesTitle }}</h2>
          <div class="event-grid">
            @for (outcome of content.outcomes; track outcome.title) {
              <article class="event-stat">
                <span class="material-icons event-stat__icon" aria-hidden="true">{{ outcome.icon }}</span>
                <h3 class="event-stat__title">{{ outcome.title }}</h3>
                <p class="event-stat__body">{{ outcome.body }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="event-day__section">
        <div class="container event-day__layout">
          <div>
            <p class="event-day__eyebrow">Agenda Shape</p>
            <h2 class="event-day__heading">{{ content.stepsTitle }}</h2>
            <div class="event-timeline">
              @for (step of content.steps; track step.title; let index = $index) {
                <article class="event-step">
                  <span class="event-step__number">{{ index + 1 }}</span>
                  <div>
                    <h3 class="event-step__title">{{ step.title }}</h3>
                    <p class="event-step__body">{{ step.body }}</p>
                  </div>
                </article>
              }
            </div>
          </div>

          <aside class="event-card">
            <h3 class="event-card__title">Keep Exploring</h3>
            <a routerLink="/" class="btn btn--primary btn--sm">
              Back to overview
              <span class="material-icons" aria-hidden="true">arrow_forward</span>
            </a>
          </aside>
        </div>
      </section>
    </main>
  `,
})
export class EventDayLayoutComponent {
  @Input({ required: true }) content!: EventDayContent;
}
