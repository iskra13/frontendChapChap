import { Circle, Marker, Popup } from 'react-leaflet';
import { EnvironmentOutlined } from '@ant-design/icons';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { allCoordinates, radius } from './Coordinate.data';
import './../../App.css';
import { useSocketDataStore } from '../../Store';

const Coordinate = () => {
  const { socketData } = useSocketDataStore((state) => state);

  return (
    <>
      {socketData.map((data, index) => {
        const center: [number, number] = [parseFloat(data.node_x), parseFloat(data.node_y)];
        const circleColor = data.fire ? 'red' : 'green';

        return (
          <Circle
            key={index}
            center={center}
            radius={radius}
            pathOptions={{ color: circleColor, fillColor: circleColor, fillOpacity: 0.3 }}
          >
            <Marker position={center} icon={customMarkerIcon(data.fire)}>
              <Popup>
                <h3 style={{ textAlign: 'center' }}>На данный момент</h3>
                <p>
                  <strong>Время:</strong> {data.timestamp}
                </p>
                <p>
                  <strong>Температура:</strong> {data.temperature}°C
                </p>
                <p>
                  <strong>Влажность:</strong> {data.humidity}%
                </p>
                <p>
                  <strong>Кислород:</strong> {data.oxygen}%
                </p>
                <p>
                  <strong>Углекислый газ:</strong> {data.CO2} ppm
                </p>
                <p>
                  <strong>Огонь:</strong> {data.fire ? 'Да🔥 ' : 'Нет'}
                </p>
              </Popup>
            </Marker>
          </Circle>
        );
      })}
    </>
  );
};

export default Coordinate;

const customMarkerIcon = (isFire: number) => {
  return new L.DivIcon({
    className: '',
    html: ReactDOMServer.renderToString(
      <EnvironmentOutlined
        style={{
          fontSize: 30,
          color: isFire ? 'red' : 'green',
        }}
      />
    ),
    iconAnchor: [15, 15], // смещение относительно центра маркера
  });
};
