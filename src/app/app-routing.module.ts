import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'new',
    component: CreateTemplateComponent
  },
  {
    path: 'create-template',
    component: CreateWorkflowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
