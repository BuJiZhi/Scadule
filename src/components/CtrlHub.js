import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { baseField, payloadInfo, dateQueryInfo } from "../config";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    minWidth: "1200px"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  inputInput: {
    marginLeft: theme.spacing(1),
    height: "1rem"
  },
  appBar: {
    backgroundColor: "#aaa"
  },
  submitButton: {
    marginLeft: theme.spacing(1)
  },
  payload: {
    "& > *": {
      diplay: "flex",
      flexDirection: "column"
    }
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [payloadShow, changeShow] = useState(false);
  const [base, baseUpdate] = useState({});
  const [payld, payldUpdate] = useState({});
  const { handleTodoUpload } = props;

  const handlePayloadClick = e => {
    changeShow(!payloadShow);
  };

  const updateBase = e => {
    const { name, value } = e.target;
    baseUpdate({
      ...base,
      [name]: value
    });
  };

  const updatePayload = e => {
    const { name, value } = e.target;
    payldUpdate({
      ...payld,
      [name]: value
    });
  };

  const handleInfoUpload = () => {
    const info = {
      ...base,
      payload: payld
    };
    handleTodoUpload(info);
  };

  const payload = type => (
    <form className={classes.form} noValidate autoComplete="off">
      <Typography className={classes.title} variant="h6" noWrap>
        详细
      </Typography>
      {payloadInfo[type].map(({ key, id, label }) => (
        <TextField
          key={key}
          id={id}
          name={id}
          label={label}
          variant="outlined"
          color="primary"
          size="small"
          className={classes.inputInput}
          onChange={updatePayload}
        />
      ))}
      <Button onClick={handleInfoUpload} variant="outlined" color="secondary">
        提交
      </Button>
    </form>
  );

  const baseInfo = () => (
    <form className={classes.form} noValidate autoComplete="off">
      <Typography className={classes.title} variant="h6" noWrap>
        信息输入
      </Typography>
      {baseField.map(({ key, id, label, type, defaultValue }) => (
        <TextField
          key={key}
          id={id}
          name={id}
          label={label}
          type={type}
          defaultValue={defaultValue}
          variant="outlined"
          color="primary"
          size="small"
          className={classes.inputInput}
          onChange={updateBase}
          InputLabelProps={{
            shrink: true
          }}
        />
      ))}
    </form>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {payloadShow ? payload("makeUp") : baseInfo()}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handlePayloadClick}
          >
            {payloadShow ? "返回" : "详情"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
