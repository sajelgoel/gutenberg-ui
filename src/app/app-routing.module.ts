import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './shared/components/category-page/category-page.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';


const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'category/:categoryName',
    component: CategoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
