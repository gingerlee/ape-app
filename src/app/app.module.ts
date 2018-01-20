import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsAddComponent } from './animals-add/animals-add.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalsAddComponent,
    AnimalsEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
