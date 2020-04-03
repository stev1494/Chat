import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent  },
  { path: '', component: MensajesComponent},
  { path: '**', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
