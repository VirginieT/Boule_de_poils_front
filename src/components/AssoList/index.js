import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import './assoList.scss';

const AssoList = () => {
  return (
    <div className="assoInfo">
      <div className="assoInfo__map">
        <MapContainer center={[46.5, 2.6]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
        <div className="assoInfo__list">
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
          <div className="assoInfo__card">
            <h3>DisneyLand</h3>
            <p>Canards, souris et autres bêtes en tout genre, qui parlent !</p>
            <ul className="assoInfo__contact">
              <li>6 rue de la tourette</li>
              <li>75000 Paris</li>
              <li>08 36 65 65 65</li>
              <li>vador@dark.fr</li>
            </ul>
          </div>
        </div>
    </div>
        
      
  );
};

export default AssoList;
