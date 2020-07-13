import React from 'react';

const ControlPanel = (props) => {
  return (
    <div className='control_panel'>
      <button
        onClick={() => {
          props.onShowMain();
        }}
      >
        Главная
      </button>
      <button
        onClick={() => {
          props.onShowAddSensor();
        }}
      >
        Добавить датчик
      </button>
      <button
        onClick={() => {
          props.onShowAddOptimal();
        }}
      >
        Добавить опт. значение
      </button>
      <button
        onClick={() => {
          props.onShowAddTerrain();
        }}
      >
        Добавить местность
      </button>
      <button
        onClick={() => {
          props.onShowAddSensorData();
        }}
      >
        Добавить замер данных датчика
      </button>
      <button onClick={() => {}}>Добавить измеряемую величину</button>
    </div>
  );
};

export default ControlPanel;
