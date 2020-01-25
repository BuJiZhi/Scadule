import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import { dateQueryInfo } from "../config";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  form: {
    display: "flex",
    flexDirection: "row",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "& > *": {
      marginRight: theme.spacing(2)
    }
  }
}));

export default function ButtonAppBar(props) {
  const { handleLoginClick, author, getTodos } = props;
  const [query, updateQuery] = useState({});
  const classes = useStyles();
  const handleQueryChange = e => {
    const { name, value } = e.target;
    updateQuery({
      ...query,
      [name]: value
    });
  };
  const handleQuerySubmit = e => {
    e.preventDefault();
    getTodos(query);
  };
  const dateQuery = () => (
    <form
      className={classes.form}
      onSubmit={handleQuerySubmit}
      noValidate
      autoComplete="off"
    >
      <Typography className={classes.title} variant="h6" noWrap>
        日期选择
      </Typography>
      {dateQueryInfo.map(({ key, id, label, type, defaultValue }) => (
        <TextField
          key={key}
          id={id}
          name={id}
          label={label}
          type={type}
          defaultValue={defaultValue}
          variant="standard"
          color="secondary"
          size="small"
          className={classes.inputInput}
          onChange={handleQueryChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      ))}
      <Button type="submit">获取数据</Button>
    </form>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {dateQuery()}
          <Typography variant="h6" className={classes.title}>
            Beta
          </Typography>
          {!author ? (
            <Button color="inherit" onClick={handleLoginClick}>
              Login/Register
            </Button>
          ) : (
            <Typography>{author}</Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
