import { PhamatechPage } from './app.po';

describe('phamatech App', () => {
  let page: PhamatechPage;

  beforeEach(() => {
    page = new PhamatechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
