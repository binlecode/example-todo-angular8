import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
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
      title: [
        '', 
        Validators.compose([
          Validators.required, 
          Validators.minLength(4),
          Validators.maxLength(128),
          Validators.pattern('^[A-Za-z ]+$')
        ])
      ]
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

  /**
   * @param form The ngForm object
   */
  // getFormValidationMessages(form: NgForm): string[] { 
  //   let messages: string[] = []; 
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
  //   });
  //   return messages;
  // }

  /**
   * @param state The formControl object
   * @param thingName The name of the formControl field 
   * @returns The error message (string) array
   */
  getValidationMessages(state: any, thingName?: string): string[] { 
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) { 
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`); 
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`); 
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        } 
      }
    }
    return messages;
  }

}
