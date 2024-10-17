import { useState } from "react";
import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";

const MediaList = ({ title, tabs }) => {
  // const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;

  const { data } = useFetch({ url });
  const mediaList = (data.results || []).slice(0, 12);
  // useEffect(() => {
  //   const url = tabs.find((tab) => tab.id === activeTabId)?.url;

  //   if (url) {
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODM2OTBlODkzYjUwOTIxZmUwMGQyYmU4MjI5OWIzZSIsIm5iZiI6MTcyODM1MDYyMC44NzQxNDYsInN1YiI6IjY1MTYzM2I1YTE5OWE2MDBjNDljZTZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJ21qFx-TSxVdl5ljJoFDedwF7FCMu-F225icwcBRns",
  //       },
  //     })
  //       .then(async (res) => {
  //         const data = await res.json();
  //         const trendingMediaList = data.results.slice(0, 12);
  //         setMediaList(trendingMediaList);
  //         console.log({ data });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }
  // }, [activeTabId, tabs]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
          {/* <li className="px-2 py-1 text-black bg-white rounded cursor-pointer">
            All
          </li>
          <li className="px-2 py-1 rounded cursor-pointer">Movie</li>
          <li className="px-2 py-1 rounded cursor-pointer">Tv Show</li> */}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => (
          <MovieCard
            id={media.id}
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
