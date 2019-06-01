import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserResolver} from './user.resolver';
import {UserComponent} from './user/user.component';

const routes: Routes = [{path:'users', component: UserComponent,

resolve:{
   users: UserResolver
}
}, {path:'', redirectTo:'/users', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[UserResolver]
})
export class AppRoutingModule { }
