import React from 'react';

const ControlPanel = (props) => {
  return (
    <div className='control_panel'>
      <button
        onClick={() => {
          props.onShowHide();
        }}
      >
        Главная
      </button>
      <button onClick={() => {}}>Добавить датчик</button>
      <button onClick={() => {}}>Добавить опт. значение</button>
      <button onClick={() => {}}>Добавить местность</button>
      <button onClick={() => {}}>Добавить время года</button>
      <button onClick={() => {}}>Добавить измеряемую величину</button>
    </div>
  );
};

export default ControlPanel;
