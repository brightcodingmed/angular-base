import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  persist(todo) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo)
  }

  delete(id) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
