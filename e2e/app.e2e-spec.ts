import { VoyEnBusPage } from './app.po';

describe('voy-en-bus App', () => {
  let page: VoyEnBusPage;

  beforeEach(() => {
    page = new VoyEnBusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
