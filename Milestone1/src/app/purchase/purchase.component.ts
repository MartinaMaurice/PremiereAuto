import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  clearFormFields(): void {
    // Set form field values to empty strings or null here
    this.clearField('exampleInputFName');
    this.clearField('exampleInputLName');
    this.clearField('exampleNationalId');
    this.clearField('exampleInputEmail1');
    this.clearField('exampleInputContNum');
  }
  clearField(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.value = ''; // Clear the field value
    }
  }

}
