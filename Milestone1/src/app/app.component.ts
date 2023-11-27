import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import bootstrap from '../main.server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

}

