import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { CategoryPageComponent } from './shared/components/category-page/category-page.component';
import { GenreCardComponent } from './shared/components/genre-card/genre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryPageComponent,
    GenreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
