import React from 'react';

const ControlPanel = (props) => {
  return (
    <div className='control_panel'>
      <button
        onClick={() => {
          props.onShowHide();
        }}
      >
        Show/Hide Main Content
      </button>
    </div>
  );
};

export default ControlPanel;
