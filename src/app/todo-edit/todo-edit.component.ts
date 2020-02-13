import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  todoForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private activeAouter: ActivatedRoute,
    private router: Router, 
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])]
    });
  }

  getDetail(id) {
    this.api.getTodo(id)
      .subscribe(
        data => {
          this.id = data.id;
          this.todoForm.setValue({ title: data.title });
          console.log(data);
        }
      );
  }

  updateTodo(form: NgForm) {
    this.api.updateTodo(this.id, form)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
