import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])]
    });
  }

  addTodo() {
    const payload = {
      title: this.todoForm.controls.title.value
    };

    this.api.addTodo(payload)
      .subscribe(
        res => {
          let id = res['_id'];
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
