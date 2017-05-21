import { Ng2ExamProjectCLIPage } from './app.po';

describe('ng2-exam-project-cli App', function() {
  let page: Ng2ExamProjectCLIPage;

  beforeEach(() => {
    page = new Ng2ExamProjectCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
