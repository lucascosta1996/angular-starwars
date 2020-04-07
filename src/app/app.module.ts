import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CharactersComponent } from './characters/characters.component';
import { DataService } from './services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HelperService } from './services/helpers.services';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    CharactersComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    HelperService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
