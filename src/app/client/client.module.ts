import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { MatiereComponent } from './matiere/matiere.component';
import { BacComponent } from './bac/bac.component';
import { ConsignesComponent } from './consignes/consignes.component';
import { ApresBacComponent } from './apres-bac/apres-bac.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    SectionComponent,
    MatiereComponent,
    BacComponent,
    ConsignesComponent,
    ApresBacComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
