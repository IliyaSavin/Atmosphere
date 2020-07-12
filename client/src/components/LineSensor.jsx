import React from 'react';

const LineSensor = (props) => {
  return (
    <div className='line_sensor'>
      <div>{props.id}</div>
      <div>{props.unit}</div>
      <div>{props.model}</div>
      <div>{new Date(props.interval).toLocaleTimeString().slice(0, -3)}</div>
      <div>{props.designation}</div>
      <div>{props.parametr}</div>
      <div>{props.manufacture}</div>
      <div>{props.accuracy}</div>
    </div>
  );
};

export default LineSensor;
