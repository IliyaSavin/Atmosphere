import React from 'react';

const LineOptimal = (props) => {
  return (
    <div className='line_optimal'>
      <div>{props.id}</div>
      <div>{props.season}</div>
      <div>{props.down}</div>
      <div>{props.up}</div>
      <div>{props.parametr}</div>
      <div>{props.unit}</div>
      <div>{props.designation}</div>
    </div>
  );
};

export default LineOptimal;
