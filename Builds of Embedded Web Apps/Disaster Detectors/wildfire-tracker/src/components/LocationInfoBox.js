import React from 'react';
import './LocationInfoBox.css';

const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
      <h2>Event Info</h2>
      <ul>
        <li><strong>ID:</strong> {info.id}</li>
        <li><strong>Title:</strong> {info.title}</li>
        <li><strong>Latitude:</strong> {info.lat}</li>
        <li><strong>Longitude:</strong> {info.long}</li>
      </ul>
      <a
        href={`https://eonet.gsfc.nasa.gov/api/v2.1/events/${info.id}`}
        target='_blank'
        rel='noreferrer'
      >
        More Info
      </a>
    </div>
  );
};

export default LocationInfoBox;
