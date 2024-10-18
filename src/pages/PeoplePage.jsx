import ImageComponents from "@components/ImageComponents";
import RelatedMediaList from "@components/MeadiaDetail/RelatedMediaList";

const PeoplePage = () => {
  return (
    <div>
      <div className="container">
        <div className="flex-1">
          <ImageComponents width={600} height={900} className="mb-6" />
          <div>
            <p className="mb-6 text-lg font-bold">Person Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Know For</p>
                <p>Acting</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>Male</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>Northamton</p>
              </div>
              <div>
                <p className="font-bold">Know For</p>
                <p>2024-02-03</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-bold">Matt Smith</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biography</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              officiis, temporibus quibusdam dicta odio vitae eius magni totam
              animi corporis reiciendis eligendi saepe tenetur veniam sed beatae
              est, quae sit, commodi nostrum incidunt quaerat voluptatem
              consequatur. Qui nam, esse quisquam consequatur dolores rem
              soluta, sed odio nisi explicabo sunt culpa.
            </p>
          </div>
          <div>
            <p>Know For</p>
            <RelatedMediaList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
