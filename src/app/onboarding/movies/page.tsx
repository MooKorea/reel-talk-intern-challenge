"use client";
import SearchBar from "@/app/_components/SearchBar";
import useOnboardingSave from "@/app/_hooks/useOnboardingSave";
import Thumbnail from "@/app/_components/Thumbnail";
import { movieData } from "./movieData";
import { mediaType } from "../layout";
import { useState } from "react";
import SelectionFooter from "@/app/_components/SelectionFooter";
import ThumbnailGrid from "@/app/_components/ThumbnailGrid";
import { RootState, movieState } from "@/app/_state/store";
import Selection from "@/app/_components/Selection";

export default function TopMovies() {
  //Genre selection count, up to 5
  const [count, setCount] = useState(0);

  //Currently selected movies
  const [selection, setSelection] = useState<mediaType[]>([]);

  useOnboardingSave(3);

  //Creates 5 slots in the footer
  let selectionContainers: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    selectionContainers = [
      ...selectionContainers,
      <Selection
        key={i}
        setSelection={setSelection}
        data={selection[i]}
        action={movieState.remove(selection[i]?.label)}
      />,
    ];
  }

  return (
    <>
      <h1 className="text-[28px] text-white/[0.92] mt-14">Select your top 5 movies</h1>
      <p className="w-[600px] mt-2 tracking-wide font-AvenirLight leading-[23px] text-center text-base text-white/[0.8]">
        Selecting your top 5 movies will enable us to suggest like-minded users and nearby
        communities for exciting watch parties and movie premiere gatherings
      </p>
      <SearchBar />
      <ThumbnailGrid title="Movies you might like">
        {movieData.map((e, i) => {
          return (
            <Thumbnail
              data={e}
              count={count}
              setCount={setCount}
              selection={selection}
              setSelection={setSelection}
              key={i}
              urlSearchParam="movie"
              removeAction={movieState.remove(e.label)}
              addAction={movieState.add(e.label)}
              rootState={(state: RootState) => state.movie.value}
            />
          );
        })}
      </ThumbnailGrid>
      <SelectionFooter
        selection={selection}
        selectionContainers={selectionContainers}
        nextPage="/onboarding/tvshows"
        previousPage="/onboarding/genres"
      />
    </>
  );
}
