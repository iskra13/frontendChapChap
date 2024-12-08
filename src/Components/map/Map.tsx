import { MapContainer, Polygon, TileLayer } from 'react-leaflet';

import { getGeneralPolygon, getStartPositionCamera } from './utils';

import styles from './Map.module.css';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const startPosition: any = getStartPositionCamera();
const generalPolygon: any = getGeneralPolygon();

const Map = () => {
  return (
    <div className={styles.map} style={{ height: '100vh' }}>
      <MapContainer
        center={startPosition}
        zoom={15}
        minZoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polygon pathOptions={{ color: '#223623' }} positions={generalPolygon} />
      </MapContainer>
    </div>
  );
};

export default Map;
