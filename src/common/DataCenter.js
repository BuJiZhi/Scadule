export default class DataCenter {

  constructor(data) {
    if (data && data.result === 0) {
      this._days = data.data.days;
      this._teacherName = data.data.teachers;
      this._todos = data.data.todos;
    }
  }

  getDays() {
    return this._days;
  }

  getTeacherName() {
    return this._teacherName;
  }

  getTodos() {
    return this._todos;
  }

  addTodos(todo) {
    this._todos.push(todo);
  }
}