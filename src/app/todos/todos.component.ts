import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos = [];
  ngOnInit() {
  }

  getTodos() {
    this.todoService.getAll().subscribe(function(response){
      console.log(response);
      this.todos = response;
    });
  }

}
