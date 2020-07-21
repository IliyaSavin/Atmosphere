import React, {useEffect, useState} from 'react';
import Loader from './Loader';

function AddTerrain(props) {
  const axios = require('axios');

  const [loading, setLoading] = useState(true);

  const [typeTerrain, setTypeTerrain] = useState('');
  const [square, setSquare] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  function onChangeTypeTerrain(e) {
    const newValue = e.target.value;
    setTypeTerrain(newValue);
  }

  function onChangeSquare(e) {
    const newValue = e.target.value;
    setSquare(parseFloat(newValue));
  }

  function onChangeLatitude(e) {
    const newValue = e.target.value;
    setLatitude(parseFloat(newValue));
  }

  function onChangeLongitude(e) {
    const newValue = e.target.value;
    setLongitude(parseFloat(newValue));
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();

    if (typeTerrain && square && latitude && longitude) {
      const data = {
        terrain_type: typeTerrain,
        area: square,
        latitude: latitude,
        longitude: longitude,
      };

      axios
        .post('/api/add/terrain', data, {
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
      <div className='add_header'>Добавить местность</div>

      <div className='add_line_wrapper'>
        <div>Тип местности</div>
        <div>
          <input
            type='text'
            onChange={onChangeTypeTerrain}
            value={typeTerrain}
          />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Площадь</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeSquare} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Широта</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeLatitude} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Долгота</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeLongitude} />
        </div>
      </div>

      <button className='button_add'>Добавить</button>
    </form>
  );
}

export default AddTerrain;
