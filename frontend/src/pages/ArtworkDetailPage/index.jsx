import { useLocation } from 'react-router-dom';

const ArtworkDetailPage = () => {
  const { state } = useLocation();
  const artwork = state.artwork;

  return (
    <div className="movie-details">
      <h1>{artwork.title}</h1>
      <img src={artwork.picture} alt={artwork.title} />
      <h2>Description: { artwork.description }</h2>
    </div>
  );
}

export default ArtworkDetailPage;