import { Component } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'test-tutorial',
  templateUrl: './test.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class testComponent {
  constructor(private tutorialService: TutorialService) {}

  testTutorial(): void {
    this.tutorialService.test().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }

}
