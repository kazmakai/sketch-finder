import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArtworkListPage = () => {
    const {id} = useParams();
    const [location, setLocation] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/locations/'+id);
            const data = await response.json();
            console.log(data);
            setLocation(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      if (location === null) return 
  return (
    <div>
        {location.artwork.map((artwork) => <Artwork artwork={artwork} key={artwork._id}/>)}
    </div>
  )
}

const Artwork = ({artwork}) => {
    return (
        <div>
            <img src={artwork.picture} />
        </div>
    )
}
export default ArtworkListPage;