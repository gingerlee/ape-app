import { ApeAppPage } from './app.po';

describe('ape-app App', function() {
  let page: ApeAppPage;

  beforeEach(() => {
    page = new ApeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
