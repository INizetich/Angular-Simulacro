import { Routes } from '@angular/router';

import { DiosesForm } from './pages/dioses-form/dioses-form';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: 'dioses', component: DiosesForm },
    { path: 'contacto', component: Contact },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
