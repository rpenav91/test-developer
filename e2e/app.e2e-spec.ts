import { TestDeveloperPage } from './app.po';

describe('test-developer App', () => {
  let page: TestDeveloperPage;

  beforeEach(() => {
    page = new TestDeveloperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
