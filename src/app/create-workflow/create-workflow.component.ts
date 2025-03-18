import { Component } from '@angular/core';

@Component({
  selector: 'app-create-workflow',
  standalone: false,
  templateUrl: './create-workflow.component.html',
  styleUrl: './create-workflow.component.scss'
})
export class CreateWorkflowComponent {
  selectedIndex = 0;
  buttonText = 'Next';

  gotoNext() {
    this.buttonText = this.selectedIndex === 6 ? 'Preview' : this.buttonText;
    if (this.selectedIndex !== 7) {
      this.selectedIndex += 1;
    }
  }

  gotoPrev() {
    if (this.selectedIndex !== 0) {
      this.selectedIndex -= 1;
    }
    this.buttonText = 'Next';
  }
}
