import FeatureMovie from "@components/FeatureMovies/FeatureMovie";
import MediaList from "../components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/contants";

function HomePage() {
  return (
    <div>
      <FeatureMovie />
      <MediaList title="trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
