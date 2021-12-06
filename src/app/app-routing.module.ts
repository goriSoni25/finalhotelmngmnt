import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateComponent } from './update/update/update.component';

const routes: Routes = [
  

    {path:"form",component:EmployeeformComponent},
  
  {path:'update/:id/:edit',component:UpdateComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
