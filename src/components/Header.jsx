import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <img src="./netflix.png" alt="" className="w-16 sm:w-28" />
        <a href="" className="text-sm">
          Phim
        </a>
        <a href="" className="text-sm">
          Truyền hình
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
