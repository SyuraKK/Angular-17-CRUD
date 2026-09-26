import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AddTutorialComponent } from './add-tutorial.component';
import { FormsModule } from '@angular/forms';

describe('AddTutorialComponent', () => {
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTutorialComponent],
      providers: [
        provideHttpClient()
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
