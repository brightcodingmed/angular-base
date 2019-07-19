import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
           private todoService: TodoService,
           private flashMessage: FlashMessagesService
           ) { }

  todo = {
    title: '',
    completed: false
  }

  todos: any[] = [];
  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll().subscribe((response: any[]) => {
      console.log(response);
      this.todos = response;
    });
  }

  createTodo() {
    this.todoService.persist(this.todo).subscribe(res => {
      this.todos = [res, ...this.todos];
      this.todo = {
        title: '',
        completed: false
      }
    })
  }

  destroyTodo(id) {
    
  
    Swal.fire({
      title: 'delete course?',
      text: 'Are you sure to delete this item ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        
        this.todoService.delete(id).subscribe(res => {
          this.todos = this.todos.filter(todo => todo.id !== id)
          this.flashMessage.show('This todo lis deleted Successfully!', {
            cssClass: 'alert-info',
            timeout: 3000 
          })
        },
        err => {
          this.flashMessage.show(err.message, {
            cssClass: 'alert-warning',
            timeout: 3000 
          })
        })
    
        
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })


  }

  editTodo(todo) {
    this.todo = todo;
  }

}
