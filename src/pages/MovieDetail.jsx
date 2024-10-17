import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MeadiaDetail/Banner";
import ActorList from "@components/MeadiaDetail/ActorList";
import RelatedMediaList from "@/components/MeadiaDetail/RelatedMediaList";
import MovieInformation from "@components/MeadiaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";
const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });

  const relatedMovies = recommandationsResponse.results || [];
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
            <RelatedMediaList
              mediaList={relatedMovies}
              isLoading={isRelatedMoviesLoading}
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
