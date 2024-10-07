import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Movie = () => {
  return (
    <div>
      <img
        className="aspect-video brightness-50"
        src="https://plus.unsplash.com/premium_photo-1724824053224-40d726301acf?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div>
        <div>
          <div className="mt-4 hidden sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium possimus eius libero repellendus alias dolorum,
              architecto velit consequuntur totam natus animi rem quos. Eveniet
              vitae, cupiditate id voluptatibus cum in facilis, omnis,
              repudiandae aspernatur deleniti alias architecto laborum. Cumque,
              blanditiis.
            </p>
          </div>
          <div className="mt-4">
            <button className="text-10 lg:text-2 mr-4 rounded bg-white px-4 py-2 text-black">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
              View detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
