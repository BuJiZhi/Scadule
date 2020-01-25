import React, { Component } from "react";
import Display from "../components/Display";
import data from "../mock/data.json";
import { numberTodayMap } from "../common/config";
import { get, post } from "../services/request";
import {
  TEACHER_ALL,
  TEACHER_REGISTER,
  TEACHER_LOGIN,
  TODO_UPLOAD,
  DATE_QUERY
} from "../config";

export default class DisplayCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      teacherName: [],
      todos: [],
      dateQuery: { dateBegin: "2020-01-20", dateEnd: "2020-01-28" },
      measure: {
        columnHeight: 870,
        columnWidth: 80,
        totalWidth: 100,
        totalTime: 870, // 7:00-21:30
        titleWidth: 300,
        titleHeight: 50
      },
      isShowLogin: false,
      author: "",
      type: "y"
    };
  }

  componentDidMount() {
    this.getTeacher();
  }

  dataAnalizer() {
    if (data && data.data) {
      let { todos } = data.data;
      for (let i = 0; i < todos.length; i++) {
        let date = new Date(todos[i].date);
        console.log(date.getDay());
      }
    }
  }

  getDateList() {
    const { dateBegin, dateEnd } = this.state.dateQuery;
    let days = [];
    function getDate(datestr) {
      var temp = datestr.split("-");
      var date = new Date(
        temp[0],
        (parseInt(temp[1], 0) - 1).toString(),
        temp[2]
      );
      return date;
    }
    var startTime = getDate(dateBegin);
    var endTime = getDate(dateEnd);
    while (endTime.getTime() - startTime.getTime() >= 0) {
      var year = startTime.getFullYear();
      var month =
        startTime.getMonth().toString().length === 1
          ? "0" + (startTime.getMonth() + 1).toString()
          : startTime.getMonth();
      var day =
        startTime.getDate().toString().length === 1
          ? "0" + startTime.getDate()
          : startTime.getDate();
      days.push({
        date: year + "-" + month + "-" + day,
        day: numberTodayMap[startTime.getDay()]
      });
      startTime.setDate(startTime.getDate() + 1);
    }
    this.setState({
      days
    });
  }

  registerTeacher = info => {
    post(TEACHER_REGISTER, info)
      .then(res => res.json)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  teacherLogin = info => {
    post(TEACHER_LOGIN, info)
      .then(data => {
        if (data.result === 0) {
          this.setState({
            author: data.data.name,
            isShowLogin: false
          });
        }
      })
      .catch(err => console.log(err));
  };

  getTeacher = () => {
    get(TEACHER_ALL).then(data => {
      if (data && data.result === 0) {
        let teacherName = [];
        for (let teacher of data.data) {
          teacherName.push(teacher.name);
        }
        this.setState({
          teacherName
        });
      }
    });
  };

  handleLoginClick = () => {
    this.setState({
      isShowLogin: !this.state.isShowLogin
    });
  };

  handleTodoUpload = todo => {
    post(TODO_UPLOAD, todo)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // è®¡ç®å®¹å¨çå®½
  caculateWidth() {
    const { measure } = this.state;
    const { days, teacherName } = this.state;
    this.setState({
      measure: {
        ...measure,
        totalWidth: teacherName.length * days.length * measure.columnWidth,
        titleWidth: measure.columnWidth * teacherName.length
      }
    });
  }

  // æ´æ°todo
  updateTodos({ type, teacher, date, day, timeBegin, timeEnd, discrib }) {
    let todos = this.state.dotos;
    todos.push({
      type,
      teacher,
      date,
      day,
      timeBegin,
      timeEnd,
      discrib
    });
    this.setState({
      todos
    });
  }

  getTodos = query => {
    post(DATE_QUERY, query)
      .then(data => {
        if (data.result === 0) {
          for (let todo of data.data) {
            todo.date = this.dateFormat(todo.date);
          }
          this.setState(
            {
              todos: data.data,
              dateQuery: query
            },
            () => {
              this.getDateList();
              this.caculateWidth();
              console.log(this.state);
            }
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  dateFormat = date => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month =
      d.getMonth().toString().length === 1
        ? "0" + (d.getMonth() + 1).toString()
        : d.getMonth();
    let day =
      d.getDate().toString().length === 1 ? "0" + d.getDate() : d.getDate();
    return year + "-" + month + "-" + day;
  };

  render() {
    return (
      <Display
        {...this.state}
        handleLoginClick={this.handleLoginClick}
        registerTeacher={this.registerTeacher}
        teacherLogin={this.teacherLogin}
        handleTodoUpload={this.handleTodoUpload}
        getTodos={this.getTodos}
      />
    );
  }
}
