import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'movie',component:DetailMovieComponent},
  {path:'**',component:ErrorPageComponent},
  {path:'movies', component:CardContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
