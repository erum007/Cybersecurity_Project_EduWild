import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import './Map.css';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = (eventData || []).map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              lat: ev.geometries[0].coordinates[1],
              long: ev.geometries[0].coordinates[0],
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB3AOspKuVh2TEJWATFL1Sj3vFUllwYb7w' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 20, lng: 0 },
  zoom: 2,
};

export default Map;
