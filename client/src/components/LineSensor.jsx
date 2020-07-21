import React from 'react';

const LineSensor = (props) => {
  console.log();

  return (
    <div className='line_sensor'>
      <div>{props.id}</div>
      <div>{props.model}</div>
      <div>{props.manufacture}</div>
      <div>
        {new Date(props.interval).toUTCString().slice(0, -3).split(' ')[4]}
      </div>
      <div>{props.accuracy}</div>
      <div>{props.parametr}</div>
      <div>{props.unit}</div>
      <div>{props.designation}</div>
    </div>
  );
};

export default LineSensor;
