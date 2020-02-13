import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    data: { title: 'List of todos' }
  },
  {
    path: 'todo/add',
    component: TodoAddComponent,
    data: { title: 'Add todo' }
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent,
    data: { title: 'Edit todo' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
