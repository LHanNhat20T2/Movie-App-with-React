import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MeadiaDetail/Banner";
import ActorList from "@components/MeadiaDetail/ActorList";
import RelatedMediaList from "@/components/MeadiaDetail/RelatedMediaList";
import MovieInformation from "@components/MeadiaDetail/MovieInformation";
const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRelatedMovieListLoading, setIsRelatedMovieLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODM2OTBlODkzYjUwOTIxZmUwMGQyYmU4MjI5OWIzZSIsIm5iZiI6MTcyODM1MDYyMC44NzQxNDYsInN1YiI6IjY1MTYzM2I1YTE5OWE2MDBjNDljZTZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJ21qFx-TSxVdl5ljJoFDedwF7FCMu-F225icwcBRns",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  useEffect(() => {
    setIsRelatedMovieLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODM2OTBlODkzYjUwOTIxZmUwMGQyYmU4MjI5OWIzZSIsIm5iZiI6MTcyODM1MDYyMC44NzQxNDYsInN1YiI6IjY1MTYzM2I1YTE5OWE2MDBjNDljZTZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJ21qFx-TSxVdl5ljJoFDedwF7FCMu-F225icwcBRns",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const currentRelatedMovies = (data.results || []).slice(0, 12);
        setRelatedMovies(currentRelatedMovies);
        // setMovieInfo(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRelatedMovieLoading(false);
      });
  }, [id]);
  if (isLoading) {
    <Loading />;
  }

  console.log("API response:", movieInfo);

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            {movieInfo.credits?.cast ? (
              <ActorList actors={movieInfo.credits.cast || []} />
            ) : (
              <Loading />
            )}
            <RelatedMediaList mediaList={relatedMovies} />
          </div>

          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
