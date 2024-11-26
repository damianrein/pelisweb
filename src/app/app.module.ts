import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailMovieComponent,
    ErrorPageComponent,
    CardComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
