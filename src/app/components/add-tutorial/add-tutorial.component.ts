import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  tutorial: Tutorial = {
    name: '',
    email: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      email: this.tutorial.email
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      email: '',
      published: false
    };
  }
}
