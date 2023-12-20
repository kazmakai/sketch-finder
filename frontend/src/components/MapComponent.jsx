import { useState } from "react"
import {
    APIProvider,
    Map,
    AdvancedMarker, 
    Pin,
    InfoWindow,
    Marker
} from "@vis.gl/react-google-maps"

const MapComponent = () => {
    const position = { lat: 35.66, lng: 139.70 };
    return (
      <APIProvider apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div style={{height: "50vh"}}>
          <Map zoom={15} center={position}>
            <Marker position={{lat: 35.66, lng: 139.70}}/>
          </Map>
        </div>
      </APIProvider>
  )
}

export default MapComponent;