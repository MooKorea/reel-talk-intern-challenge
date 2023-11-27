"use client";
import SearchBar from "@/app/_components/SearchBar";
import useOnboardingSave from "@/app/_hooks/useOnboardingSave";
import Thumbnail from "@/app/_components/Thumbnail";
import { tvshowData } from "./tvshowData";
import { useState } from "react";
import SelectionFooter from "@/app/_components/SelectionFooter";
import ThumbnailGrid from "@/app/_components/ThumbnailGrid";
import { mediaType } from "../layout";
import { RootState } from "@/app/_state/store";
import { tvshowState } from "@/app/_state/store";
import Selection from "@/app/_components/Selection";

export default function TopTVShows() {
  //Genre selection count, up to 5
  const [count, setCount] = useState(0);

  //Currently selected TV shows
  const [selection, setSelection] = useState<mediaType[]>([]);

  useOnboardingSave(4);
  
  //Creates 5 slots in the footer
  let selectionContainers: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    selectionContainers = [
      ...selectionContainers,
      <Selection
        key={i}
        setSelection={setSelection}
        data={selection[i]}
        action={tvshowState.remove(selection[i]?.label)}
      />,
    ];
  }

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
              urlSearchParam="tvshow"
              removeAction={tvshowState.remove(e.label)}
              addAction={tvshowState.add(e.label)}
              rootState={(state: RootState) => state.tvshow.value}
            />
          );
        })}
      </ThumbnailGrid>
      <SelectionFooter
        selection={selection}
        selectionContainers={selectionContainers}
        nextPage="/onboarding/blah"
        previousPage="/onboarding/movies"
      />
    </>
  );
}
