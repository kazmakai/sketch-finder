import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const MarkerComponent = ({ location }) => {
  const [open, setOpen] = useState(false);

  const handleMarkerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AdvancedMarker
        position={{ lat: location.latitude, lng: location.longitude }}
        onClick={handleMarkerClick}
      >
        {open && (
          <InfoWindow
            position={{ lat: location.latitude, lng: location.longitude }}
            onCloseClick={handleMarkerClick}
          >
            <h2>{location.placeName}</h2>
            <Link to={`/artworklist/${location._id}`}>To ArtworkList</Link>
          </InfoWindow>
        )}
        <span style={{ fontSize: "2rem" }}>🎨</span>
      </AdvancedMarker>
    </div>
  );
};

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/locations');
        const data = await response.json();
        console.log(data);
        setLocations(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const position = { lat: 35.66, lng: 139.70 };

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="API-container">
          <APIProvider apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div className="map-container">
              <Map
                zoom={15}
                center={position}
                mapId={import.meta.env.VITE_REACT_APP_GOOGLE_MAP_ID}
              >
                {locations.map((location) => (
                  <MarkerComponent key={location.id} location={location} />
                ))}
              </Map>
            </div>
          </APIProvider>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
