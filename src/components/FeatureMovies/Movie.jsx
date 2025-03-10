import { useModalContext } from "@components/context/ModalProvider";
import ImageComponents from "@components/ImageComponents";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Movie = ({ data, trailerVideoKey }) => {
  const { id, backdrop_path, title, release_date, overview } = data || {};

  const { openPopup } = useModalContext();

  return (
    <div>
      {backdrop_path ? (
        <ImageComponents
          className="aspect-video w-full brightness-50"
          src={
            backdrop_path &&
            `https://media.themoviedb.org/t/p/original${backdrop_path}`
          }
          alt={title || "Movie Image"}
        />
      ) : (
        <div>No image available</div>
      )}
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://media.themoviedb.org/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  ></iframe>,
                );
              }}
              className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <Link to={`/movie/${id}`}>
              <button className="rounded bg-slate-300/35 px-4 py-2 text-10 lg:text-lg">
                View detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
