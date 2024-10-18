import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  const movies = (popularMoviesResponse.results || []).slice(0, 4);
  useEffect(() => {
    if (movies[0]?.id) setActiveMovieId(movies[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveMovieId((prevId) => {
  //       const currentIndex = movies.findIndex((movie) => movie.id === prevId);
  //       const nextIndex = (currentIndex + 1) % movies.length; // Vòng lại bộ phim đầu tiên khi đến cuối
  //       return movies[nextIndex]?.id;
  //     });
  //   }, 5000); // 5000ms = 5 giây

  //   return () => clearInterval(interval); // Hủy interval khi component unmount
  // }, [movies]);
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie
            data={movie}
            trailerVideoKey={
              (videoResponse?.results || []).find(
                (video) => video.type === "Trailer" && video.site === "YouTube",
              )?.key
            }
            key={movie.id}
          />
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
