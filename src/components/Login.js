import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Tabs, Tab, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: theme.spacing(10),
    left: "35%",
    width: "350px",
    height: "500px",
    zIndex: 10000,
    backgroundColor: "#eee"
  },
  form: {
    position: "relative",
    boxSizing: "border-box",
    padding: theme.spacing(4),
    "& > *": {
      width: "100%",
      marginTop: theme.spacing(2)
    }
  }
}));

export default function ButtonAppBar(props) {
  const { teacherLogin, registerTeacher } = props;
  const { isShowLogin } = props;
  const [tab, tabSwitch] = useState(0);
  const [loginInfo, loginUpdate] = useState({
    account: "000000",
    password: "000000"
  });
  const [registerInfo, registerUpdate] = useState({
    account: "000000",
    password: "000000",
    name: "unname",
    school: "noschool",
    type: "teacher"
  });

  const classes = useStyles();

  const handleTabSwitch = (e, value) => {
    tabSwitch(value);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    teacherLogin(loginInfo);
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    registerTeacher(registerInfo);
  };

  const handleLoginChanged = e => {
    const { name, value } = e.target;
    if (name && value) {
      loginUpdate({
        ...loginInfo,
        [name]: value
      });
    }
  };

  const handleRegisterChanged = e => {
    const { name, value } = e.target;
    if (name && value) {
      registerUpdate({
        ...registerInfo,
        [name]: value
      });
    }
  };

  const LoginComponent = (
    <form
      onSubmit={handleLoginSubmit}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="account"
        name="account"
        label="工号"
        variant="outlined"
        color="secondary"
        onChange={handleLoginChanged}
      />
      <TextField
        id="password"
        name="password"
        label="密码"
        variant="outlined"
        color="secondary"
        onChange={handleLoginChanged}
      />
      <Button type="submit">Login</Button>
    </form>
  );

  const RegisterComponent = (
    <form
      className={classes.form}
      onSubmit={handleRegisterSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="account"
        name="account"
        label="账号"
        variant="outlined"
        color="secondary"
        onChange={handleRegisterChanged}
      />
      <TextField
        id="name"
        name="name"
        label="姓名"
        onChange={handleRegisterChanged}
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="password"
        name="password"
        label="密码"
        variant="outlined"
        color="secondary"
        onChange={handleRegisterChanged}
      />
      <TextField
        id="school"
        name="school"
        label="学校"
        variant="outlined"
        color="secondary"
        onChange={handleRegisterChanged}
      />
      <TextField
        id="type"
        name="type"
        label="权限"
        variant="outlined"
        color="secondary"
        onChange={handleRegisterChanged}
      />
      <Button type="submit">SUBMIT</Button>
    </form>
  );

  return isShowLogin ? (
    <Paper className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleTabSwitch}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <div>{tab === 0 ? LoginComponent : RegisterComponent}</div>
    </Paper>
  ) : (
    ""
  );
}
