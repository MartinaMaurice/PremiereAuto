import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CarsComponent } from './cars/cars.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Sign Up Page',
        component: SignupComponent,
    },
    {
        path: 'home',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
        path: 'info',
        title: 'Info Page',
        component: InfoComponent,
    },
    {
        path: 'cars',
        title: 'Cars Page',
        component: CarsComponent,
    },
    {
        path: 'contactus',
        title: 'Contact Us Page',
        component: ContactusComponent,
    },
    {
        path: 'purchase',
        title: 'Purchase Page',
        component: PurchaseComponent,
    },
    {
        path: 'login',
        title: 'Login Page',
        component: LoginComponent,
    }

];
