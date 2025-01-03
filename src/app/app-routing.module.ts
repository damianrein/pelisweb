import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movie',component:DetailMovieComponent},
  {path:'movies', component:CardContainerComponent},
  {path:'card', component:CardComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
