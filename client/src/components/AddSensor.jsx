import React, {useEffect, useState} from 'react';
import Loader from './Loader';

function AddSensor(props) {
  const axios = require('axios');
  const [measuredValue, setMesuredValue] = useState([]);
  const [loading, setLoading] = useState(true);

  const [measured, setMeasured] = useState(2);
  const [model, setModel] = useState('');
  const [manufacture, setManufacture] = useState('');
  const [precision, setPrecision] = useState(0);
  const [interval, setInterval] = useState('');

  const regTime = /^(((0|1)?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/;

  function onChangeMeasured(e) {
    const newValue = e.target.value;
    setMeasured(newValue);
    console.log(measured);
  }

  function onChangeModel(e) {
    const newValue = e.target.value;
    setModel(newValue);
    console.log(model);
  }

  function onChangeManufacture(e) {
    const newValue = e.target.value;
    setManufacture(newValue);
    console.log(manufacture);
  }

  function onChangePrecision(e) {
    const newValue = e.target.value;
    setPrecision(newValue);
    console.log(precision);
  }

  function onChangeInterval(e) {
    const newValue = e.target.value;
    setInterval(newValue);
    console.log(interval);
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();
    console.log(measured);

    if (regTime.test(interval) && model && manufacture && precision) {
      const data = {
        id_value: measured,
        model: model,
        manufacturer: manufacture,
        precision: precision,
        interval: interval,
      };

      axios
        .post('http://localhost:5000/api/add/sensor', data, {
          headers: {
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          props.onShowMain();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else alert('Залолните все поля и \nВведите интервал в формате HH:mm:ss');
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/measuredValue`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setMesuredValue(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <form className='add_sensor' onSubmit={OnSubmitForm}>
      <div className='add_header'>Добавить датчик</div>
      <div className='add_line_wrapper'>
        <div>Измеряемая величина</div>
        <div>
          <select onChange={onChangeMeasured}>
            {measuredValue.map((measuredValue) => (
              <option
                key={measuredValue.id_измеряемой_величины}
                value={measuredValue.id_измеряемой_величины}
              >
                {measuredValue.Название}, {measuredValue.Единица_измерения}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Модель</div>
        <div>
          <input type='text' onChange={onChangeModel} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Производитель</div>
        <div>
          <input type='text' onChange={onChangeManufacture} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Точность</div>
        <div>
          <input type='number' onChange={onChangePrecision} step='0.01' />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Интервал</div>
        <div>
          <input type='text' onChange={onChangeInterval} />
        </div>
      </div>

      <button className='button_add'>Добавить</button>
    </form>
  );
}

export default AddSensor;
