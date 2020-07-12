import React from 'react';

const LineTerrain = (props) => {
  return (
    <div className='line_terrain'>
      <div>{props.id}</div>
      <div>{props.type}</div>
      <div>{props.square}</div>
      <div>{props.longitude}</div>
      <div>{props.latitude}</div>
    </div>
  );
};

export default LineTerrain;
