import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import {Favorite, Share} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  outContainer: {
    boxSizing: "border-box",
    position: "absolute",
    fontSize: "3px",
    overflow: "hidden",
    borderRadius: "3px"
  },
  root: {
    overflowY: "auto",
    backgroundColor: "#fff",
    "& > *": {
      padding: theme.spacing(1),
      margin: 0
    }
  },
  cardheader: {
    backgroundColor: "red"
  }
}));

const indexOf = (value, lst) => {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === value) {
      return i;
    }
  }
  return false;
};

const getDateIndex = (d, dArr) => {
  for (let i = 0; i < dArr.length; i++) {
    if (d === dArr[i].date) {
      return i;
    }
  }
  return -1;
};

const time2distance = function(begin, end, height, totalTime) {
  const unit = height / totalTime;
  let beginTime = begin.split(":");
  beginTime = [parseInt(beginTime[0], 0), parseInt(beginTime[1], 0)];
  let endTime = end.split(":");
  endTime = [parseInt(endTime[0], 0), parseInt(endTime[1], 0)];
  const distance =
    endTime[0] * 60 + endTime[1] - (beginTime[0] * 60 + beginTime[1]);
  return distance * unit;
};

const caculatePos = (
  todo,
  teacherName,
  days,
  columnWidth,
  columnHeight,
  totalTime
) => {
  let pos = {};
  const dateB =
    getDateIndex(todo.date, days) * (columnWidth * teacherName.length);
  pos.top = time2distance("7:00", todo.timeBegin, columnHeight, totalTime);
  pos.tall = time2distance(
    todo.timeBegin,
    todo.timeEnd,
    columnHeight,
    totalTime
  );
  const teacherB = teacherName.indexOf(todo.teacher) * columnWidth;
  pos.left = dateB + teacherB;
  return pos;
};

export default ({ measure, todo, days, teacherName }) => {
  const classes = useStyle();
  const { teacher, timeBegin, timeEnd, type, payload } = todo;
  const { columnWidth, columnHeight, totalTime } = measure;
  const pos = caculatePos(
    todo,
    teacherName,
    days,
    columnWidth,
    columnHeight,
    totalTime
  );
  return (
    <Card
      className={classes.outContainer}
      style={{
        width: `${columnWidth}px`,
        left: `${pos.left}px`,
        top: `${pos.top}px`,
        height: `${pos.tall}px`
      }}
    >
      <Card
        className={classes.root}
        style={{
          width: `${columnWidth + 17}px`,
          height: `${pos.tall}px`
        }}
      >
        <div className={classes.cardheader}>
          {type}
        </div>
        <div>
          <Typography variant="caption" display="block" gutterBottom>
           {teacher}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
           开始:{timeBegin}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
           结束:{timeEnd}
          </Typography>
        </div>
        <div>
          {payload
            ? Object.keys(payload).map((item, index) => (
                <Typography variant="caption" display="block" gutterBottom>
                  {item}:<br />{payload[item]}
                </Typography>))
            : ""
          }
        </div>
        {/* <CardActions disableSpacing>
          <IconButton size="small" aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton size="small" aria-label="share">
            <Share />
          </IconButton>
        </CardActions> */}
      </Card>
    </Card>
  );
};
