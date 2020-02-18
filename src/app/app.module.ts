import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Element } from './elements';
import { Pipes } from './pipes';
import { TableComponent } from './elements/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    Element.Autocomplete,
    Pipes.AutocompleteFilter,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
