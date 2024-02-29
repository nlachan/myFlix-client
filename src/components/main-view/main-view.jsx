import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  {
    id: 1;
    title: "Inception";
    image: "https://www.amazon.com/Inception-Artistic-Decoration-Unframe-style-12x18inch/dp/B0CPV5BYCN/ref=sr_1_3?dib=eyJ2IjoiMSJ9.wh73kbkyuixDGAg6bLlOWIkS4qU-VyhuNcHJA3IyyNCw65twZWeqOly_QcBTp8XVyInSocgHGtxttvtLkgVQZk-ATZiTvkukImIgqzGQiSsFSOnkK9YBehl8VuyVT0FuiVnE8l46lbYswrqWWux-Lv8H-qTg-oQXGx73hFSyi7Ony59mfuPetduBrOlRk22YGtDuMdiU4jACQ2TYXnoTDo4tM6N_yXvSuOicHUY9w_IbIMVV_on22OFVLhql1l29ziOC57C56I7urnNw505EYGN-Rnx2CeBFKD5b_aC-5bQ.NQYFQpMcelr9vAMkNSgdCUQoWtG8O-HTyZcIVotelbw&dib_tag=se&keywords=Inception%2BPoster&qid=1709175326&sr=8-3&th=1";
    description: "A movie about dream infiltration, corporate espionage and the meaning of life, Inception is a stunning and complex thriller by Christopher Nolan";
    genre: "Sci-Fi";
    director: "Christopher Nolan";
  }
  {
    id: 2;
    title: "The Shawshank Redemption";
    image: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg";
    description: "A classic drama based on Stephen King's short story about a wrongfully convicted banker who befriends a fellow prisoner in a gloomy jail";
    genre: "Drama";
    director: "Frank Darabont";
  }
  {
    id: 3;
    title: "Gladiator";
    image: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg";
    description: "A former Roman General seeks revenge against the corrupt emperor who killed his family and enslaved him";
    genre: "Adventure";
    director: "Ridley Scott";
  }
};

const [selectedMovie, setSelectedMovie] = useState(null);

if (selectedMovie) {
  return (
    <MovieView
      movie={selectedMovie}
      onBackClick={() => setSelectedMovie(null)}
    />
  );
}

if (movies.length === 0) {
  return <div>The list is empty!</div>;
}

return (
  <div>
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
      />
    ))}
  </div>
);
