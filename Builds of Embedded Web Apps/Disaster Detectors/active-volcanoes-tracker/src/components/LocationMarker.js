import React from 'react';
import './LocationMarker.css';

const LocationMarker = ({ onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      🌋
    </div>
  );
};

export default LocationMarker;
