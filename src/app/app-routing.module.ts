import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonePageComponent } from './pages/none-page/none-page.component';

const routes: Routes = [
  {path: '', component: NonePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
