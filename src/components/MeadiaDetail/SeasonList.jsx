import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponents from "@components/ImageComponents";

const SeasonList = ({ seasons = [] }) => {
  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-1">
        {seasons.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponents
              width={130}
              height={195}
              src={`https://media.themoviedb.org/t/p/w300${season.poster_path}`}
              className="w-1/4 rounded-lg"
            />
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">{season.name}</p>

              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">{season.air_date}</span>
              </p>
              <p>{season.episode_count} Episodes</p>
              <p>{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonList;
