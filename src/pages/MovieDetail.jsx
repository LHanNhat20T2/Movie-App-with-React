import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MeadiaDetail/Banner";
import ActorList from "@components/MeadiaDetail/ActorList";
import MovieInformation from "@components/MeadiaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";
import RelatedMediaList from "@components/MeadiaDetail/RelatedMediaList";
const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });

  const relatedMovies = recommandationsResponse.results || [];

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US", // Sửa từ `results` thành `result`
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director ", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  console.log(crews);
  if (isLoading) {
    <Loading />;
  }

  console.log("API response:", movieInfo);

  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        releaseDate={movieInfo.release_date}
        genres={movieInfo.genres}
        point={movieInfo.vote_average}
        overview={movieInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            {movieInfo.credits?.cast ? (
              <ActorList actors={movieInfo.credits.cast || []} />
            ) : (
              <Loading />
            )}
            <RelatedMediaList
              mediaList={relatedMovies}
              isLoading={isRelatedMoviesLoading}
              title="More like this"
            />
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
