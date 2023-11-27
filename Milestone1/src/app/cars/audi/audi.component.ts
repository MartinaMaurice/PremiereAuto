import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-audi',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.css'
})
export class AudiComponent {

  showFirst: boolean = true;
  showSecond: boolean = true;
  showThird: boolean = true;
  showFourth: boolean = true;
  showFifth: boolean = true;
  showSixth: boolean = true;
  showSeventh: boolean = true;
  showEighth: boolean = true;

  toggleCollapse(collapseId: string) {
    if (collapseId === 'collapseWidthExample1') {
      this.showFirst = !this.showFirst;
    } else if (collapseId === 'collapseWidthExample2') {
      this.showSecond = !this.showSecond;
    }
    else if (collapseId === 'collapseWidthExample3') {
      this.showThird = !this.showThird;
    }
    else if (collapseId === 'collapseWidthExample4') {
      this.showFourth = !this.showFourth;
    }
    else if (collapseId === 'collapseWidthExample5') {
      this.showFifth = !this.showFifth;
    }
    else if (collapseId === 'collapseWidthExample6') {
      this.showSixth = !this.showSixth;
    }
    else if (collapseId === 'collapseWidthExample7') {
      this.showSeventh = !this.showSeventh;
    }
    else if (collapseId === 'collapseWidthExample8') {
      this.showEighth = !this.showEighth;
    }
  }
}