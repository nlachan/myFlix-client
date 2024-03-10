import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

//destructered prop - movie is the name of the prop in main-view.jsx
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>

        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
