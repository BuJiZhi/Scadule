import React from "react";
import "./Scadule.css";

export default ({ days, measure, teacherName }) => {
  return (
    <div
      className="title"
      style={{
        display: "flex",
        height: `${measure.titleHeight}px`,
        overflow: "hidden"
      }}
    >
      {days.map((day, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: `${measure.titleWidth}px`,
            textAlign: "center"
          }}
        >
          <div>
            {day.day}|{day.date}
          </div>
          {teacherName.map((name, index) => (
            <div
              key={index}
              style={{
                display: "inline-block",
                width: `${measure.columnWidth}px`
              }}
            >
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
