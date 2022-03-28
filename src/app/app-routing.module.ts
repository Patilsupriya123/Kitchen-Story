import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {"path":"add",component:AddproductComponent},
  {"path":"list",component:ListComponent},
  {"path":"header",component:HeaderComponent},
  {"path":"login",component:LoginComponent},
  {'path':"home",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }