import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ center, zoom }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDTGaREtHJUBV8encJkkGlk3MORkaui8nQ' }} // Replace with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
       
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;