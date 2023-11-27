import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './bmw.component.html',
  styleUrl: './bmw.component.css'
})
export class BMWComponent {

  showFirst: boolean = false;
  showSecond: boolean = false;
  showThird: boolean = false;
  showFourth: boolean = false;
  showFifth: boolean = false;
  showSixth: boolean = false;
  showSeventh: boolean = false;
  showEighth: boolean = false;

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
