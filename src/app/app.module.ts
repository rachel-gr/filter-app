import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FilterBySelectPipePipe } from './filter-by-select-pipe.pipe';
import { DataCardComponent } from './data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FilterPipePipe,
    FilterBySelectPipePipe,
    DataCardComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
