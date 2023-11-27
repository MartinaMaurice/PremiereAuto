import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  clearFormFields(): void {
    this.clearField('exampleInputAddress');
    this.clearField('exampleInputEmail1');
    this.clearField('exampleInputtelNum');
  }
  clearField(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.value = '';
    }
  }
}
