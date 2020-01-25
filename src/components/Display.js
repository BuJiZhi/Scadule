import React, { Component } from "react";
import "./Display.css";
import Scadule from "./Scadule";
import CtrlHub from "./CtrlHub";
import Header from "./Header";
import Login from "./Login";
import Paper from "@material-ui/core/Paper";
import Gutter from "./Gutter";

export default class Dispaly extends Component {
  render() {
    const {
      isShowLogin,
      handleLoginClick,
      handleTodoUpload,
      registerTeacher,
      teacherLogin,
      author,
      getTodos,
      measure
    } = this.props;
    return (
      <div className="display-root">
        <Header
          handleLoginClick={handleLoginClick}
          author={author}
          getTodos={getTodos}
        />
        <Paper className="classRoom">
          <Gutter measure={measure} />
          <Paper className="canvas">
            <Scadule {...this.props} />
          </Paper>
        </Paper>
        <CtrlHub handleTodoUpload={handleTodoUpload} />
        <Login
          isShowLogin={isShowLogin}
          teacherLogin={teacherLogin}
          registerTeacher={registerTeacher}
        />
      </div>
    );
  }
}
