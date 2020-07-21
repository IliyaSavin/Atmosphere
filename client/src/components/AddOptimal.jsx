import React, {useEffect, useState} from 'react';
import Loader from './Loader';

function AddOptimal(props) {
  const axios = require('axios');
  const [measuredValue, setMesuredValue] = useState([]);
  const [season, setSeason] = useState([]);
  const [terrain, setTerrain] = useState([]);
  const [loading, setLoading] = useState(true);

  const [measured, setMeasured] = useState(2);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedTerrain, setSelectedTerrain] = useState(1);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  function onChangeMeasured(e) {
    const newValue = e.target.value;
    setMeasured(parseInt(newValue));
  }

  function onChangeTerrain(e) {
    const newValue = e.target.value;
    setSelectedTerrain(parseInt(newValue));
  }

  function onChangeSeason(e) {
    const newValue = e.target.value;
    setSelectedSeason(parseInt(newValue));
  }

  function onChangeTop(e) {
    const newValue = e.target.value;
    setTop(parseFloat(newValue));
  }

  function onChangeBottom(e) {
    const newValue = e.target.value;
    setBottom(parseFloat(newValue));
  }

  function sentData() {
    if (bottom && top) {
      const data = {
        id_value: measured,
        id_season: selectedSeason,
        id_terrain: selectedTerrain,
        bottom: bottom,
        top: top,
      };

      axios
        .post('/api/add/optimal', data, {
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
  }

  const OnSubmitForm = (e) => {
    e.preventDefault();
    let isCreated = false;

    if (selectedSeason && selectedTerrain && measured) {
      const data = {
        id_value: measured,
        id_season: selectedSeason,
        id_terrain: selectedTerrain,
      };

      axios
        .post('/api/add/checkOptimal', data, {
          headers: {
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          isCreated = response.data.isCreated;
          if (isCreated) {
            alert('Значение уже существует');
          } else {
            sentData();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  function fetchMeasuredValue() {
    axios
      .get(`/api/get/measuredValue`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setMesuredValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchSeason() {
    axios
      .get(`/api/get/seasons`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setSeason(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchTerrain() {
    axios
      .get(`/api/get/terrain`, {
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

  useEffect(() => {
    fetchMeasuredValue();
    fetchSeason();
    fetchTerrain();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <form className='add_sensor' onSubmit={OnSubmitForm}>
      <div className='add_header'>Добавить оптимальное значение</div>

      <div className='add_line_wrapper'>
        <div>Время года</div>
        <div>
          <select onChange={onChangeSeason}>
            {season.map((season) => (
              <option
                key={season.id_времени_года}
                value={season.id_времени_года}
              >
                {season.Название}
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
        <div>Нижняя граница</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeBottom} />
        </div>
      </div>

      <div className='add_line_wrapper'>
        <div>Верхняя граница</div>
        <div>
          <input type='number' step='0.01' onChange={onChangeTop} />
        </div>
      </div>

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

      <button className='button_add'>Добавить</button>
    </form>
  );
}

export default AddOptimal;
