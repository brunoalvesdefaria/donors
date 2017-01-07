import { BloodMapPage } from './app.po';

describe('blood-map App', function() {
  let page: BloodMapPage;

  beforeEach(() => {
    page = new BloodMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
