import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TodoDetailRoutingModule} from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from '../../services/todo.service';



@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoDetailModule { }
