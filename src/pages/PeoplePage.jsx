import ImageComponents from "@components/ImageComponents";
import RelatedMediaList from "@components/MeadiaDetail/RelatedMediaList";
import { GENDER_MAPPING } from "@libs/contants";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  console.log({ peopleInfo });
  return (
    <div className="text[1.2vw] bg-black text-white">
      <div className="container">
        <div className="flex-1">
          <ImageComponents
            src={
              peopleInfo.profile_path &&
              `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`
            }
            width={600}
            height={900}
            className="mb-6"
          />
          <div>
            <p className="mb-6 text-[1.3vw] font-bold">Person Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Know For</p>
                <p>{peopleInfo.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{peopleInfo.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{peopleInfo.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-[2vw] font-bold">{peopleInfo.name}</p>
          <div className="mb-6">
            <p className="mb-4 font-bold text-[1.4]">Biography</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <RelatedMediaList
            mediaList={peopleInfo.combined_credits?.cast || []}
            title="Known For"
          />
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
