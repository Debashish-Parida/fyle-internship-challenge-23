import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'user/:id',
    component: UserDetailsComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
