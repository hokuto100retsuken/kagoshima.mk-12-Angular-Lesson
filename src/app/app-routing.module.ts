import { ZipPageComponent } from './pages/zip-page/zip-page.component';
import { HeroListPageComponent } from './pages/hero-list-page/hero-list-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonePageComponent } from './pages/none-page/none-page.component';

const routes: Routes = [
  {path: '', component: NonePageComponent},
  {path: 'top', component: TopPageComponent},
  {path: 'counter', component: CounterPageComponent},
  {path: 'hero-list', component: HeroListPageComponent},
  {path: 'zip', component: ZipPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
