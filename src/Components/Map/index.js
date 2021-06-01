import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { REACT_APP_TOKEN } from "../../config";
import icon from '../../assets/mapMarker.png';

function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: -34.511661,
    longitude: -58.568748,
    zoom: 14,
  });

  return (
    <div className="mapContainer">
      <ReactMapGL
        {...viewport}
        width="100%"
        height={350}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={REACT_APP_TOKEN}
        className="map"
      >
        <Marker
          latitude={-34.511661}
          longitude={-58.568748}
          offsetLeft={-20}
          offsetTop={-10}
          className="marker"
        >
          <img src={icon} className="markerIcon" />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Map;
