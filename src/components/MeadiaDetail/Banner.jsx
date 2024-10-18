import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import ImageComponents from "@components/ImageComponents";
import { useModalContext } from "@components/context/ModalProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  overview,
  point,
  trailerVideoKey,
}) => {
  const groupedCrews = groupBy(crews, "job");
  const { openPopup } = useModalContext();
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <ImageComponents
        width={1200}
        height={800}
        className="absolute inset-0 aspect-video w-full brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponents
            width={600}
            height={900}
            className="h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt="Movie backdrop"
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(",")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  ></iframe>,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
            {/* <div>
          <p>Director</p>
          <p>Nhat</p>
        </div>
        <div>
          <p>Writter</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
