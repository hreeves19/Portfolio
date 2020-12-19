import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [ContactMeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactMeModule { }
