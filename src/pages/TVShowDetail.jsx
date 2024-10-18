import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MeadiaDetail/Banner";
import ActorList from "@components/MeadiaDetail/ActorList";
import RelatedMediaList from "@/components/MeadiaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import TVShowInformation from "@components/MeadiaDetail/TVShowInformation";
import SeasonList from "@components/MeadiaDetail/SeasonList";
const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRecommandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedTVShow = recommandationsResponse.results || [];

  const certification = (tvInfo.content_rating?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;
  if (isLoading) {
    <Loading />;
  }
  const crews = (tvInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.includes(job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  return (
    <div>
      <Banner
        title={tvInfo.name}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        releaseDate={tvInfo.first_air_date}
        genres={tvInfo.genres}
        point={tvInfo.vote_average}
        overview={tvInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (tvInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            {tvInfo.aggregate_credits?.cast ? (
              <ActorList
                actors={(tvInfo.aggregate_credits.cast || []).map((cast) => ({
                  ...cast,
                  character: cast.roles[0]?.character,
                  episodeCount: cast.roles[0]?.episode_count,
                }))}
              />
            ) : (
              <Loading />
            )}
            <SeasonList seasons={(tvInfo.seasons || []).reverse()} />
            <RelatedMediaList
              mediaList={relatedTVShow}
              isLoading={isRecommandationLoading}
              title="More like this"
            />
          </div>

          <div className="flex-1">
            <TVShowInformation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetail;
