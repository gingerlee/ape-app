import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsAddComponent } from './animals-add/animals-add.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalsAddComponent,
    AnimalsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
