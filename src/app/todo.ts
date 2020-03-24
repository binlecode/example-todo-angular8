export class Todo {
    id: number;
    title = '';
    completed = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}