import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    fontSize: "5px",
    width: "50px"
  },
  chip: {
    borderBottom: "1px solid #eee",
    textAlign: "center"
  }
}));
const timeTochip = (time, step) => {
  let timeList = [];
  for (let i = 0; i < time; i += step) {
    let min = i % 60;
    let minstr =
      min.toString().length < 2 ? "0" + min.toString() : min.toString();
    let hour = 7 + Math.floor(i / 60);
    timeList.push(hour.toString() + ":" + minstr);
  }
  return timeList;
};
export default function(props) {
  const { measure } = props;
  const { totalTime } = measure;
  const tlist = timeTochip(totalTime, 30);
  const classes = useStyle();
  const style = {
    height: `${Math.floor(totalTime / (tlist.length + 1))}px`
  };
  return (
    <Paper className={classes.root}>
      {tlist.map((time, index) => (
        <div key={index} style={style} className={classes.chip}>
          {time}
        </div>
      ))}
    </Paper>
  );
}
