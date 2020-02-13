import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { Todo } from './todo';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// const apiUrl = 'http://localhost:3000/api/v1/todos';
const apiUrl = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl, httpOptions)
      .pipe(
        tap(todos => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Todo>(url, httpOptions)
      .pipe(
        tap(_ => console.log('fetched todo id=' + id)),
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      );
  }

  // addTodo(todo: Todo): Observable<Todo> {
  addTodo(todo: any): Observable<Todo> {
    return this.http.post<Todo>(apiUrl, todo, httpOptions)
      .pipe(
        tap((todo: Todo) => console.log(`added todo with id=${todo.id}`)),
        catchError(this.handleError<Todo>('addTodo'))
      );
  }

  /**
   * API: PUT /todos/:id
   * @param {Todo} todo
   */
  updateTodo(id: number, todo: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put<Todo>(url, todo, httpOptions)
      .pipe(
        tap(_ => console.log(`updated todo id=${id}`)),
        catchError(this.handleError<any>('updateTodo'))
      );
  }

  /**
   * API DELETE /todos/:id
   * @param {string} id 
   */
  deleteTodo(id: number): Observable<Todo> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted todo id=${id}`)),
        catchError(this.handleError<Todo>('deletetodo'))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
