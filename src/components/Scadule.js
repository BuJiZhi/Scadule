import React from 'react';
import './Scadule.css';
import ScaduleTitle from './ScaduleTitle';
import MissonCard from './Misson';

export default (props) => {
  const { 
    teacherName, 
    days,
    todos,
    measure
  } = props;
  return (
    <div 
      className="scadule"
      style={{
        height: `${measure.columnHeight}px`,
        width: `${measure.totalWidth}px`
      }}
    >
      <ScaduleTitle 
          days={ days }
          measure={ measure }
          teacherName={ teacherName }
      />
      {todos.map((todo, index) => 
          <MissonCard 
            measure={ measure }
            todo={ todo }
            key={ index }
            teacherName={ teacherName }
            days={ days }
          /> 
        )
      }
    </div>
  )
}