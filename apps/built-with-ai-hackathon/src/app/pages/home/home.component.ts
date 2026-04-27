import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProgramTabId = 'day-1' | 'day-2' | 'day-3' | 'day-4' | 'day-5';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero-surface">
      <div class="brand-strip">
        <picture>
          <source srcset="/brand/gdg-wroclaw-banner.png" type="image/png" />
          <img
            class="brand-strip__img"
            src="/brand/gdg-wroclaw-banner.svg"
            alt="Google Developer Group Wrocław"
            width="1440"
            height="500"
            decoding="async"
            fetchpriority="high"
          />
        </picture>
      </div>

      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-bg-glow hero-bg-glow--blue" aria-hidden="true"></div>
        <div class="hero-bg-glow hero-bg-glow--yellow" aria-hidden="true"></div>

        <div class="container hero__content">
          <p class="hero__label">
            Presented by <span class="text-emphasis">Google Developer Group Wrocław</span>
          </p>
          <h1 class="hero__title" id="hero-title">
            <span class="hero__title-regular">Build with</span>
            <span class="hero__title-ai">AI</span>
            <span class="hero__title-regular">Wrocław</span>
          </h1>
          <p class="hero__subtitle">Architecting the Future of Products</p>
          <blockquote class="hero__tagline">
            <span class="hero__tagline-regular">Stop just coding.</span>
            <span class="text-emphasis"> Start engineering the future.</span>
          </blockquote>

          <div class="hero__meta">
            <span class="chip">
              <span class="material-icons" aria-hidden="true">calendar_today</span>
              June 29 - July 4, 2025
            </span>
            <span class="chip">
              <span class="material-icons" aria-hidden="true">location_on</span>
              <span class="chip__location">Google Wrocław Office</span>
            </span>
          </div>

          <div class="hero__ctas">
            <a href="#" class="btn btn--primary">
              <span class="material-icons" aria-hidden="true">how_to_reg</span>
              Register Now
            </a>
            <button (click)="scrollToDays()" class="btn btn--ghost">
              Learn More
              <span class="material-icons" aria-hidden="true">arrow_downward</span>
            </button>
          </div>
        </div>
      </section>
    </div>

    <section class="days-section" id="days" aria-labelledby="days-title">
      <div class="container">
        <h2 class="section-title" id="days-title">6 Days. Full Cycle.</h2>
        <p class="section-subtitle">
          Every participant, regardless of background, engages in the full journey.
        </p>

        <div class="days-grid">
          @for (day of dayCards; track day.link) {
            <article class="day-card" [class.day-card--featured]="day.featured">
              <span class="day-badge {{ day.badgeClass }}">{{ day.badge }}</span>
              <span class="material-icons day-card__icon" aria-hidden="true">{{ day.icon }}</span>
              <h3 class="day-card__title">{{ day.title }}</h3>
              <p class="day-card__body">{{ day.body }}</p>
              <a class="day-card__link" [routerLink]="day.link">Explore day</a>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="program-tabs-section" aria-labelledby="program-tabs-title">
      <div class="container">
        <h2 class="section-title" id="program-tabs-title">Day Details</h2>
        <p class="section-subtitle">
          A guided path from product strategy to launch-ready AI systems.
        </p>

        <div class="program-tabs" role="tablist" aria-label="Programme day summaries">
          @for (tab of programTabs; track tab.id) {
            <button
              class="program-tabs__button"
              type="button"
              role="tab"
              [class.program-tabs__button--active]="selectedProgramTabId === tab.id"
              [attr.id]="'tab-' + tab.id"
              [attr.aria-selected]="selectedProgramTabId === tab.id"
              [attr.aria-controls]="'panel-' + tab.id"
              (click)="selectProgramTab(tab.id)"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <article
          class="program-panel"
          role="tabpanel"
          [attr.id]="'panel-' + selectedProgramTab.id"
          [attr.aria-labelledby]="'tab-' + selectedProgramTab.id"
        >
          <span class="program-panel__eyebrow">{{ selectedProgramTab.label }}</span>
          <h3 class="program-panel__title">{{ selectedProgramTab.title }}</h3>
          <p class="program-panel__body">{{ selectedProgramTab.body }}</p>
          <div class="program-panel__cta">
            <a [routerLink]="selectedProgramTab.link" class="btn btn--primary btn--sm">
              Learn More
              <span class="material-icons" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="audience-section" aria-labelledby="audience-title">
      <div class="container">
        <h2 class="section-title" id="audience-title">Who Is This For?</h2>
        <p class="section-subtitle">
          Cross-role empathy is at the heart of everything we do.
        </p>

        <div class="audience-grid">
          <article class="audience-card audience-card--blue">
            <span class="material-icons audience-card__icon" aria-hidden="true">brush</span>
            <h3 class="audience-card__title">For Designers</h3>
            <p>Stop handing over static files. Learn to influence code and cloud using AI as your bridge to engineering.</p>
          </article>

          <article class="audience-card audience-card--green">
            <span class="material-icons audience-card__icon" aria-hidden="true">developer_mode</span>
            <h3 class="audience-card__title">For Developers</h3>
            <p>Stop being a ticket-taker. Master UX and deployment strategy to evolve into a lead architect.</p>
          </article>

          <article class="audience-card audience-card--yellow">
            <span class="material-icons audience-card__icon" aria-hidden="true">settings_suggest</span>
            <h3 class="audience-card__title">For DevOps</h3>
            <p>Move beyond infrastructure. See how AI helps you integrate deeper into the product process.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="leaders-section" aria-labelledby="leaders-title">
      <div class="container">
        <h2 class="section-title" id="leaders-title">Project Leaders</h2>
        <p class="section-subtitle">The people driving Build with AI Wrocław.</p>

        <ul class="leaders-list" role="list">
          <li class="leader-card">
            <figure class="leader-card__figure">
              <img
                class="leader-card__img"
                src="/team/adrian-romanski.png"
                width="800"
                height="450"
                alt="Adrian Romański profile reference"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div class="leader-card__copy">
              <h3 class="leader-card__name">Adrian Romański</h3>
              <p class="leader-card__role">Project Lead</p>
              <p class="leader-card__tagline">
                Software engineer, PushBased · Nx Wrocław · CPACC accessibility · GDG Wrocław
              </p>
            </div>
          </li>

          <li class="leader-card">
            <figure class="leader-card__figure">
              <img
                class="leader-card__img"
                src="/team/katsiaryna-skwarek.png"
                width="800"
                height="450"
                alt="Katsiaryna Skwarek profile reference"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div class="leader-card__copy">
              <h3 class="leader-card__name">Katsiaryna Skwarek</h3>
              <p class="leader-card__role">Project Lead</p>
              <p class="leader-card__tagline">
                Developer relations · Regional lead for GDG DACH and CEE · Community and events
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brandlockup">
          <img class="footer__mark" src="/brand/gdg-mark.svg" width="36" height="36" alt="" />
          <div class="footer__brandtext">
            <span class="footer__brand-name">Google Developer Group</span>
            <span class="footer__brand-loc">Wrocław</span>
          </div>
        </div>
        <p class="footer__mission">
          Local communities for developers to connect, learn, and build. Beginners to experts are welcome.
        </p>
        <p class="footer__hashtag">#BuildWithAI</p>
        <address class="footer__contacts">
          <a href="mailto:example&#64;email.com">example&#64;email.com</a>
        </address>
        <p class="footer__copy">&copy; 2025 Google Developer Group Wrocław</p>
      </div>
    </footer>
  `,
})
export class HomeComponent {
  readonly dayCards = [
    {
      badge: 'Day 1',
      badgeClass: 'day-badge--blue',
      icon: 'architecture',
      title: 'Strategy & Foundations',
      body: 'Map out MVPs, backlogs, personas, and an Nx Monorepo foundation.',
      link: '/strategy',
      featured: false,
    },
    {
      badge: 'Day 2',
      badgeClass: 'day-badge--green',
      icon: 'palette',
      title: 'AI-Augmented Design',
      body: 'Turn visual thinking into UI blueprints and cross-role prototypes.',
      link: '/design',
      featured: false,
    },
    {
      badge: 'Days 3-4',
      badgeClass: 'day-badge--yellow',
      icon: 'code',
      title: 'Full-Stack Engineering',
      body: 'Build accessible product layers with Angular, backend logic, and AI tooling.',
      link: '/engineering',
      featured: false,
    },
    {
      badge: 'Day 5',
      badgeClass: 'day-badge--red',
      icon: 'cloud_upload',
      title: 'Cloud & Deployment',
      body: 'Deploy, monitor, and scale on Google Cloud while building an agentic TRIZ system.',
      link: '/cloud',
      featured: false,
    },
    {
      badge: 'Day 6',
      badgeClass: 'day-badge--purple',
      icon: 'rocket_launch',
      title: 'The Grand Hackathon',
      body: 'Use five days of AI superpowers to build and launch a real product.',
      link: '/hackathon',
      featured: true,
    },
  ] as const;

  readonly programTabs = [
    {
      id: 'day-1',
      label: 'Day 1',
      title: 'Strategy & Foundations',
      body: 'Define personas, pain points, KPIs, MVP scope, roadmap, prototypes, and team backlogs.',
      link: '/strategy',
    },
    {
      id: 'day-2',
      label: 'Day 2',
      title: 'Design Thinking',
      body: 'Use AI to bridge design and engineering, moving from product intent to coded prototypes.',
      link: '/design',
    },
    {
      id: 'day-3',
      label: 'Days 3-4',
      title: 'Software Engineer on Steroids',
      body: 'Build the application layer with Angular, backend logic, accessibility, and AI-assisted engineering workflows.',
      link: '/engineering',
    },
    {
      id: 'day-4',
      label: 'Day 5',
      title: 'Cloud & Deployment',
      body: 'Ship frontend and backend paths on Google Cloud, inspect logs, and build the Bielik TRIZ agent workshop.',
      link: '/cloud',
    },
    {
      id: 'day-5',
      label: 'Day 6',
      title: 'Hackathon',
      body: 'Form cross-functional teams and deliver agentic systems for inventive product challenges.',
      link: '/hackathon',
    },
  ] as const;

  selectedProgramTabId: ProgramTabId = this.programTabs[0].id;

  get selectedProgramTab() {
    return (
      this.programTabs.find((tab) => tab.id === this.selectedProgramTabId) ??
      this.programTabs[0]
    );
  }

  selectProgramTab(tabId: ProgramTabId): void {
    this.selectedProgramTabId = tabId;
  }

  scrollToDays(): void {
    document.getElementById('days')?.scrollIntoView({ behavior: 'smooth' });
  }
}
