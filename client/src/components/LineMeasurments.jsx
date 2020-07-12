import React from 'react';

const LineMeasurments = (props) => {
  return (
    <div className='line_measurments'>
      <div>{props.idData}</div>
      <div>{props.idSensor}</div>
      <div>{props.idTerrain}</div>
      <div>{props.value}</div>
      <div>{new Date(props.time).toUTCString().slice(0, -3)}</div>
    </div>
  );
};

export default LineMeasurments;
