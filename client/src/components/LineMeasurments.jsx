import React from 'react';

const LineMeasurments = (props) => {
  return (
    <div className='line_measurments'>
      <div>{props.idSensor}</div>
      <div>{props.idData}</div>
      <div>{props.idTerrain}</div>
      <div>{new Date(props.time).toUTCString().slice(0, -3)}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default LineMeasurments;
