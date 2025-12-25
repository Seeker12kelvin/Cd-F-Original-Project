import React from 'react'
import {Map} from '@vis.gl/react-google-maps';
import PoiMarkers from './PoiMakers';

const RenderedMap = (sty) => {
  return (
    <Map
      style={{ width: "100%", height: "100%" , borderRadius: `${sty}` }}
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      mapId={`64c959856ed0188a804d4ff1`}
    >
      <PoiMarkers />
    </Map>
  )
}

export default RenderedMap