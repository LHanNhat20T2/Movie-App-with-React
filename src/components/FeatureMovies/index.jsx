import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODM2OTBlODkzYjUwOTIxZmUwMGQyYmU4MjI5OWIzZSIsIm5iZiI6MTcyODM1MDYyMC44NzQxNDYsInN1YiI6IjY1MTYzM2I1YTE5OWE2MDBjNDljZTZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJ21qFx-TSxVdl5ljJoFDedwF7FCMu-F225icwcBRns",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMovieId((prevId) => {
        const currentIndex = movies.findIndex((movie) => movie.id === prevId);
        const nextIndex = (currentIndex + 1) % movies.length; // Vòng lại bộ phim đầu tiên khi đến cuối
        return movies[nextIndex]?.id;
      });
    }, 5000); // 5000ms = 5 giây

    return () => clearInterval(interval); // Hủy interval khi component unmount
  }, [movies]);
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie data={movie} key={movie.id} />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovie;
