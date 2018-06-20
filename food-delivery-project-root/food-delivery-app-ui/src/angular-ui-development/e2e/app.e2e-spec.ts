import { AngularUiDevelopmentPage } from './app.po';

describe('angular-ui-development App', () => {
  let page: AngularUiDevelopmentPage;

  beforeEach(() => {
    page = new AngularUiDevelopmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
