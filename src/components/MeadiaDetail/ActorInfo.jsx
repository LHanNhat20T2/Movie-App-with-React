import ImageComponents from "@components/ImageComponents";

const ActorInfo = ({ name, character, profilePath }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponents
        className="rounded-lg"
        alt=""
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>18 </p>
      </div>
    </div>
  );
};

export default ActorInfo;
