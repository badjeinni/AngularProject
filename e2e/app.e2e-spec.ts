import { AprojectPage } from './app.po';

describe('aproject App', function() {
  let page: AprojectPage;

  beforeEach(() => {
    page = new AprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
