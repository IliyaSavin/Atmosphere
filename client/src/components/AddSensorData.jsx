import React, {useEffect, useState} from 'react';
import Loader from './Loader';

function AddSensorData(props) {
  const axios = require('axios');

  const [terrain, setTerrain] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState('');
  const [sensorData, setSensorData] = useState(0);
  const [selectedTerrain, setSelectedTerrain] = useState(1);
  const [selectedSensor, setSelectedSensor] = useState(1);

  function onChangeDate(e) {
    const newValue = e.target.value;
    setDate(newValue.replace('T', ' '));
  }

  function onChangeTerrain(e) {
    const newValue = e.target.value;
    setSelectedTerrain(parseInt(newValue));
  }

  function onChangeSensor(e) {
    const newValue = e.target.value;
    setSelectedSensor(parseInt(newValue));
  }

  function onChangeSensorData(e) {
    const newValue = e.target.value;
    setSensorData(parseFloat(newValue));
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();

    if (sensorData && date) {
      const data = {
        id_sensor: selectedSensor,
        id_terrain: selectedTerrain,
        value: sensorData,
        time: date,
      };

      axios
        .post('http://localhost:5000/api/add/measurment', data, {
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

  function fetchTerrain() {
    axios
      .get(`http://localhost:5000/api/get/terrain`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setTerrain(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchSensors() {
    axios
      .get(`http://localhost:5000/api/get/sensors`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setSensors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchTerrain();
    fetchSensors();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <form className='add_sensor' onSubmit={OnSubmitForm}>
      <div className='add_header'>Добавить замер данных датчика</div>

      <div className='add_line_wrapper'>
        <div>Датчик</div>
        <div>
          <select onChange={onChangeSensor}>
            {sensors.map((sensors) => (
              <option key={sensors.id_датчика} value={sensors.id_датчика}>
                {sensors.Модель} #{sensors.id_датчика}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Тип местности</div>
        <div>
          <select onChange={onChangeTerrain}>
            {terrain.map((terrain) => (
              <option key={terrain.id_местности} value={terrain.id_местности}>
                {terrain.Тип_местности} #{terrain.id_местности}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Значение</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeSensorData} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Дата и время</div>
        <div>
          <input type='datetime-local' step='1' onChange={onChangeDate} />
        </div>
      </div>

      <button className='button_add'>Добавить</button>
    </form>
  );
}

export default AddSensorData;
