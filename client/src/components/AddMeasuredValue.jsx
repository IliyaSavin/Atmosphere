import React, {useEffect, useState} from 'react';
import Loader from './Loader';

function AddMeasuredValue(props) {
  const axios = require('axios');

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [unit, setUnit] = useState('');
  const [label, setLabel] = useState('');

  function onChangeTitle(e) {
    const newValue = e.target.value;
    setTitle(newValue);
  }

  function onChangeUnit(e) {
    const newValue = e.target.value;
    setUnit(newValue);
  }

  function onChangeLabel(e) {
    const newValue = e.target.value;
    setLabel(newValue);
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();

    if (title && unit && label) {
      const data = {
        title: title,
        unit: unit,
        label: label,
      };

      axios
        .post('http://localhost:5000/api/add/measuredValue', data, {
          headers: {
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          props.onShowMain();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else alert('Залолните все поля');
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <form className='add_sensor' onSubmit={OnSubmitForm}>
      <div className='add_header'>Добавить измеряемую величину</div>

      <div className='add_line_wrapper'>
        <div>Параметр</div>
        <div>
          <input type='text' onChange={onChangeTitle} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Единица измерения</div>
        <div>
          <input type='text' onChange={onChangeUnit} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Обозначение</div>
        <div>
          <input type='text' onChange={onChangeLabel} />
        </div>
      </div>

      <button className='button_add'>Добавить</button>
    </form>
  );
}

export default AddMeasuredValue;
