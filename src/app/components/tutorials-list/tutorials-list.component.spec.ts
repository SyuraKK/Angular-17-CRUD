import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TutorialsListComponent } from './tutorials-list.component';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TutorialsListComponent,
        TutorialDetailsComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: '1'
              }
            }
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
