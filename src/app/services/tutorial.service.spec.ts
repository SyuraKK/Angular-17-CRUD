import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TutorialService } from './tutorial.service';

describe('TutorialService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TutorialService,
        provideHttpClient()
      ]
    });
    service = TestBed.inject(TutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
