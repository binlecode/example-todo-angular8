export class Todo {
    id: number;
    title = '';
    complate = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}