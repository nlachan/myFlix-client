export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img height={300} src={movie.image} />
      </div>
      <div>
        <span>title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>genre: </span>
        <span>{movie.genre + " "}</span>
      </div>
      <div>
        <span>director: </span>
        <span>{movie.director}</span>
      </div>
      {/* <div>
        <span>Featured: </span>
        <span>{movie.featured}</span>
      </div> */}
      <Button onClick={onBackClick}> Back </Button>
    </div>
  );
};
