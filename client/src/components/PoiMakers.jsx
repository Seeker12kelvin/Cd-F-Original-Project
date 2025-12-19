import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const locations = [
  { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } }
];

const PoiMarkers = ({ pois = locations }) => {
  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
        >
          <Pin
            background="#FBBC04"
            glyphColor="#000"
            borderColor="#000"
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PoiMarkers;
