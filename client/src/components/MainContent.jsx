import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import LineSensor from './LineSensor';
import LineOptimal from './LineOptimal';
import LineTerrain from './LineTerrain';
import LineMeasurments from './LineMeasurments';

function MainContent(props) {
  const axios = require('axios');
  const [sensors, setSensors] = useState([]);
  const [optimal, setOptimal] = useState([]);
  const [terrain, setTerrain] = useState([]);
  const [measurments, setMeasurments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSensors();
    fetchOptimal();
    fetchTerrain();
    fetchMeasurments();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fetchSensors = () => {
    axios
      .get(`http://localhost:5000/api/main/sensors`, {
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
  };

  const fetchOptimal = () => {
    axios
      .get(`http://localhost:5000/api/main/optimal`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setOptimal(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchTerrain = () => {
    axios
      .get(`http://localhost:5000/api/main/terrain`, {
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
  };

  const fetchMeasurments = () => {
    axios
      .get(`http://localhost:5000/api/main/measurments`, {
        headers: {
          'Content-type': 'application/json',
        },
        crossDomain: true,
      })
      .then((response) => {
        setMeasurments(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='main_content'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {console.log(measurments)}
          <div className='tables_name'>Датчики</div>
          <div className='sensors_header'>
            <div>ID датчика</div>
            <div>Модель</div>
            <div>Производитель</div>
            <div>Интервал</div>
            <div>Точность</div>
            <div>Параметр</div>
            <div>Единица измерения</div>
            <div>Обозначение</div>
          </div>

          <div className='sensors_wrapper'>
            {sensors.map((sensor) => (
              <LineSensor
                key={sensor.id_датчика}
                id={sensor.id_датчика}
                unit={sensor.Единица_измерения}
                model={sensor.Модель}
                interval={sensor.Интервал}
                designation={sensor.Обозначение}
                parametr={sensor.Параметр}
                manufacture={sensor.Производитель}
                accuracy={sensor.Точность}
              />
            ))}
          </div>

          <div className='tables_name'>Оптимальные значения</div>
          <div className='optimal_header'>
            <div>ID местности</div>
            <div>Время года</div>
            <div>Нижняя граница</div>
            <div>Верхняя граница</div>
            <div>Параметр</div>
            <div>Единица измерения</div>
            <div>Обозначение</div>
          </div>

          <div className='sensors_wrapper'>
            {optimal.map((optimal) => (
              <LineOptimal
                key={optimal.id_местности}
                id={optimal.id_местности}
                season={optimal.Время_года}
                unit={optimal.Единица_измерения}
                parametr={optimal.Параметр}
                designation={optimal.Обозначение}
                up={optimal.Верхняя_граница}
                down={optimal.Нижняя_граница}
              />
            ))}
          </div>

          <div className='tables_name'>Местность</div>
          <div className='terrain_header'>
            <div>ID местности</div>
            <div>Тип местности</div>
            <div>Площадь</div>
            <div>Долгота</div>
            <div>Широта</div>
          </div>

          <div className='sensors_wrapper'>
            {terrain.map((terrain) => (
              <LineTerrain
                key={terrain.id_местности}
                id={terrain.id_местности}
                type={terrain.Тип_местности}
                square={terrain.Площадь}
                longitude={terrain.Долгота}
                latitude={terrain.Широта}
              />
            ))}
          </div>

          <div className='tables_name'>Замер данных датчика</div>
          <div className='measurments_header'>
            <div>ID замера данных</div>
            <div>ID датчика</div>
            <div>ID местности</div>
            <div>Значение</div>
            <div>Время замера</div>
          </div>

          <div className='sensors_wrapper'>
            {measurments.map((measurment) => (
              <LineMeasurments
                key={measurment.id_замера_данных}
                idSensor={measurment.id_датчика}
                idData={measurment.id_замера_данных}
                idTerrain={measurment.id_местности}
                time={measurment.Время_замера}
                value={measurment.Значение}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
