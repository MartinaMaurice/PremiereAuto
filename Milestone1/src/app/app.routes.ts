import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CarsComponent } from './cars/cars.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LoginComponent } from './login/login.component';
import { PorscheComponent } from './cars/porsche/porsche.component';
import { BMWComponent } from './cars/bmw/bmw.component';
import { MercedesComponent } from './cars/mercedes/mercedes.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
        path: 'cars/porsche',
        title: 'Porsche Cars',
        component: PorscheComponent,
    },
    {
        path: 'cars/bmw',
        title: 'BMW Cars',
        component: BMWComponent,
    },
    {
        path: 'cars/mercedes',
        title: 'Mercedes Cars',
        component: MercedesComponent,
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
