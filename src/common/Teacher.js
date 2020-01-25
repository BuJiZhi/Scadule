export default class Teacher {
  constructor(name, lessons = []) {
    this.name = name;
    this.lessons = lessons;
    this.days = {
      Monday: [],
      Tuesday: [],
      Wensday: [],
      Thursday: [],
      Friday: [],
      Saterday: [],
      Sunday: []
    };
  }

  addLesson(lesson) {
    this.lessons.push(lesson);
  }

  dayFilter() {
    Object.keys(this.days).map(day => {
      let lns = this.lessons.filter(lesson => {
        return lesson.whatDay === day;
      });
      this.days[day] = lns;
      return null;
    });
  }
}
