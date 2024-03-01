export const MovieView = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.image} />
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
      <button>Back</button>
    </div>
  );
};