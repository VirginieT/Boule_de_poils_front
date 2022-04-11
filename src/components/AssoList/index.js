import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { connexionAssociationApi } from '../../actions/association';
import './assoList.scss';
import Loader from '../Loader';

const AssoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connexionAssociationApi());
  }, []);

  const allAssociations = useSelector((state) => state.Association.apiresults);

  console.log(allAssociations);

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
        {allAssociations.length > 0 ? (
          allAssociations.map((association) => (
            <div className="assoInfo__card" key={association.id}>
              <h3>{association.name}</h3>
              <p>{association.description}</p>
              <ul className="assoInfo__contact">
                <li className="assoInfo__el">{association.street}</li>
                <li className="assoInfo__el">{association.zip_code} {association.city}</li>
                <li className="assoInfo__el">{association.phone_number}</li>
                <li className="assoInfo__el">{association.email}</li>
              </ul>
            </div>
          ))
        ) : <Loader />}
      </div>
    </div>
  );
};

export default AssoList;
