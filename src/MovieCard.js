import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({
  movie: {
    imdbID, Year, Poster, Title, Type,
  },
}) => (
  <div className="movie" key={imdbID}>
    <div>
      <p>{Year}</p>
    </div>

    <div>
      <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
    </div>

    <div>
      <span>{Type}</span>
      <h3>{Title}</h3>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
