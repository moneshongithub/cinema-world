"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const Header = () => {

  return (
    <>
      <nav className=" w-full fixed top-0 z-[100] bg-navbg shadow-sm shadow-slate-50/5 md:shadow-none">
        <div className="max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          {/* logo */}
          <Link href="/">
            <div>
              <p className="bg-primary w-28 md:w-32 text-sm md:text-base py-1 px-2 my-5 text-bg-black font-extrabold text-center rounded-sm hover:bg-yellow-400">
                TMDB
              </p>
            </div>
          </Link>

          {/* links */}

          <div className="hidden md:block">
            <ul className="list-none flex text-white space-x-10 text-lg ">
              <li className="hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/movie">Movies</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/series">Series</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            {/* searchbar */}
            <div className="mr-5 md:mr-0 sm:mr-10 ">
              <Link href="/search">
                <BiSearch className="text-xl text-white cursor-pointer hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
