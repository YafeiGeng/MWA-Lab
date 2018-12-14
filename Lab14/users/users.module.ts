import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundGuard} from "./not-found.guard";

const userRouters: Routes=[{
  path:'users',component:UsersComponent,
  children:[{
    path:':id',component:UserdetailsComponent,canDeactivate:[NotFoundGuard]
  }]
}]

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRouters)
  ]
})
export class UsersModule { }
