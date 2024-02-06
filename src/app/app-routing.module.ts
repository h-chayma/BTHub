import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './client/error/error.component';
import { ApresBacComponent } from './client/apres-bac/apres-bac.component';
import { BacComponent } from './client/bac/bac.component';
import { ConsignesComponent } from './client/consignes/consignes.component';
import { ContactComponent } from './client/contact/contact.component';
import { HomeComponent } from './client/home/home.component';
import { MatiereComponent } from './client/matiere/matiere.component';
import { SectionComponent } from './client/section/section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bac', component: BacComponent },
  { path: 'consignes', component: ConsignesComponent },
  { path: 'apresbac', component: ApresBacComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'section/:id', component: SectionComponent },
  { path: 'section/:id/matiere/:matiereId', component: MatiereComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
