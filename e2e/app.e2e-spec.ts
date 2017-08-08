import { NestedPage } from './app.po';

describe('nested App', () => {
  let page: NestedPage;

  beforeEach(() => {
    page = new NestedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
