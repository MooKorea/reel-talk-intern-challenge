"use client";
import { useState } from "react";
import Genre from "./Genre";
import Link from "next/link";
import SearchBar from "@/app/_components/SearchBar";
import useOnboardingSave from "@/app/_hooks/useOnboardingSave";
import { genreData } from "./genreData";

export default function Genres() {
  //Genre selection count, up to 5
  const [count, setCount] = useState(0);
  useOnboardingSave(2);
  return (
    <>
      <h1 className="text-[28px] text-white/[0.92] mt-14">
        Select your top 5 genres for movies and TV
      </h1>
      <SearchBar />
      <div className="mt-14 grid gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {genreData.map((e, i) => {
          return <Genre label={e} key={i} count={count} setCount={setCount} />;
        })}
      </div>
      <div className="cursor-pointer mt-6 flex items-center gap-2">
        <div className="text-white/[0.6] font-AvenirHeavy text-base">
          show more
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="6"
          fill="none"
          viewBox="0 0 13 6"
        >
          <path
            fill="#fff"
            fillOpacity="0.6"
            fillRule="evenodd"
            d="M.777.47c.37-.293.97-.293 1.34 0L6.5 3.94 10.883.47c.37-.293.97-.293 1.34 0 .37.293.37.767 0 1.06l-5.053 4c-.37.293-.97.293-1.34 0l-5.053-4c-.37-.293-.37-.767 0-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="flex my-12 text-base gap-6">
        <div className="cursor-pointer h-12 border-white border-2 w-64 rounded-md flex items-center justify-center font-AvenirHeavy text-white/[0.92]">
          Back
        </div>
        <Link
          href={"/onboarding/movies"}
          className={
            "cursor-pointer font-AvenirHeavy h-12 w-64 rounded-md flex items-center justify-center " +
            (count > 0
              ? "bg-primary text-black"
              : "bg-[#6d6d6d] text-white/[0.38]")
          }
        >
          Next
        </Link>
      </div>
    </>
  );
}
