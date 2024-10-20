import RelatedMediaList from "@components/MeadiaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

const SearchPage = () => {
  // Gán trực tiếp giá trị mặc định cho searchFormValues
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie", // Loại nội dung mặc định
    genres: [], // Mảng thể loại mặc định (rỗng)
    rating: "All", // Mức đánh giá mặc định
  });

  // Xử lý minRating và maxRating dựa vào giá trị rating
  const [minRating, maxRating] =
    searchFormValues.rating && searchFormValues.rating !== "All"
      ? searchFormValues.rating.split(" - ")
      : [0, 10];

  // Gọi API sử dụng các giá trị tìm kiếm từ form
  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?with_genres=${(searchFormValues.genres || []).join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          {/* Form tìm kiếm, nơi người dùng thay đổi giá trị */}
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          {/* Danh sách media liên quan */}
          <RelatedMediaList mediaList={data?.results || []} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
