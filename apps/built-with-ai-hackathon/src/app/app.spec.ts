import { App } from './app';

describe(App.name, () => {
  it('selects the first program tab by default', () => {
    const app = new App();

    expect(app.selectedProgramTab).toEqual({ id: 'day-1', label: 'Day 1' });
  });

  it('updates the selected program tab', () => {
    const app = new App();

    app.selectProgramTab('day-3');

    expect(app.selectedProgramTab).toEqual({ id: 'day-3', label: 'Day 3' });
  });
});
