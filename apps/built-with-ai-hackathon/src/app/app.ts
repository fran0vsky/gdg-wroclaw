import { Component } from '@angular/core';

type ProgramTabId = 'day-1' | 'day-2' | 'day-3' | 'day-4' | 'day-5';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly programTabs = [
    { id: 'day-1', label: 'Day 1' },
    { id: 'day-2', label: 'Day 2' },
    { id: 'day-3', label: 'Day 3' },
    { id: 'day-4', label: 'Day 4' },
    { id: 'day-5', label: 'Day 5' },
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
}
