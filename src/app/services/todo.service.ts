import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import{Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];
  constructor() { }

  getAllTodos(): Todo[] {
    console.log(localStorage.getItem('localData'));
    if(localStorage.getItem('localData')!== null){
      this.todos = JSON.parse(localStorage.getItem('localData'));
      console.log('Second');
    }else{
      var todoArrayData = [
        {
          id: 1,
          title: 'Prof.',
          salution: 'Mr.',
          firstName: 'Mark',
          middleName: 'Jacob',
          lastName: 'Otto',
          phone: '1234567890',
          email: 'mark_otto@gmail.com'
      },
      {
        id: 2,
        title: 'Dr.',
        salution: 'Mr.',
        firstName: 'Jacob',
        middleName: 'Mark',
        lastName: 'Thornton',
        phone: '0987654321',
        email: 'jacob_thornton@gmail.com'
      }];
      localStorage.clear();
      localStorage.setItem('localData', JSON.stringify(todoArrayData));
      this.todos = JSON.parse(localStorage.getItem('localData'));
      console.log('First');
    }
    return this.todos;
  }

  getTodoById(id: number): Todo {

    var todoArray = JSON.parse(localStorage.getItem('localData'));
    console.log(todoArray);
    return todoArray.filter(todo => todo.id === id).pop();
  }

  updateTodoById(todo:Todo): Todo{
    if (todo.id === 0) {   
      var todoArray = JSON.parse(localStorage.getItem('localData'));
      var todoid = todoArray.length;
      todo.id = ++todoid;
      todoArray.push(todo);
      localStorage.setItem('localData', JSON.stringify(todoArray));

     }else{
      var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
      todoSaveArray.forEach((element,index,arr) => {
        if(element.id === todo.id){
            arr[index] = todo;
        }
        localStorage.setItem('localData', JSON.stringify(todoSaveArray));
      });
     }
    return todo;
  }
  deleteTodoDetail(id:number){
    var todoArray = JSON.parse(localStorage.getItem('localData'));
    for(let i in todoArray){
      if(todoArray[i].id === id){
        todoArray.splice(i,1);
      }
      localStorage.setItem('localData', JSON.stringify(todoArray));
    }
  }
}
