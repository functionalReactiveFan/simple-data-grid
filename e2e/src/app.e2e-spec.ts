import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display h1 text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Simple data grid');
  });
});
