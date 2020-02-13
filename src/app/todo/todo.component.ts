import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  data: Todo[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTodos()
      .subscribe(
        res => {
          this.data = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteTodo(id, index) {
    this.api.deleteTodo(id)
      .subscribe(
        res => {
          this.data.splice(index, 1);
        },
        err => {
          console.log(err);
        }
      );
  }

}
