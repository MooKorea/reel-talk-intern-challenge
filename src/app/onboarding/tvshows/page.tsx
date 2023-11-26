"use client";
import SearchBar from "@/app/_components/SearchBar";
import useOnboardingSave from "@/app/_hooks/useOnboardingSave";
import Thumbnail from "./Thumbnail";
import { tvshowData } from "./tvshowData";
import { useState } from "react";
import Footer from "./Footer";
import ThumbnailGrid from "@/app/_components/ThumbnailGrid";

export type movieData = {
  src: string;
  label: string;
};

export default function TopMovies() {
  //Genre selection count, up to 5
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState<movieData[]>([]);
  useOnboardingSave(3);
  return (
    <>
      <h1 className="text-[28px] text-white/[0.92] mt-14">
        Select your top 5 TV shows
      </h1>
      <p className="w-[600px] mt-2 tracking-wide font-AvenirLight leading-[23px] text-center text-base text-white/[0.8]">
        Selecting your top 5 TV-shows will enable us to suggest like-minded
        users and nearby communities for exciting watch parties and movie
        premiere gatherings
      </p>
      <SearchBar />
      <ThumbnailGrid title="TV-shows you might like"> 
        {tvshowData.map((e, i) => {
          return (
            <Thumbnail
              data={e}
              count={count}
              setCount={setCount}
              selection={selection}
              setSelection={setSelection}
              key={i}
            />
          );
        })}
      </ThumbnailGrid>
      <Footer selection={selection} setSelection={setSelection} />
    </>
  );
}
