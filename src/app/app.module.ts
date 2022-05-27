import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MateriaExamplelModule } from '../../material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MateriaExamplelModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Table1Component,
    Table2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
