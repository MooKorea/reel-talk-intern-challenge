"use client";
import SearchBar from "@/app/_components/SearchBar";
import useOnboardingSave from "@/app/_hooks/useOnboardingSave";
import { useQueryState } from "next-usequerystate";
import Link from "next/link";
import { useEffect } from "react";

export default function TopMovies() {
  useOnboardingSave(3)
  return (
    <>
      <h1 className="text-[28px] text-white/[0.92] mt-14">
        Select your top 5 movies
      </h1>
      <p className="w-[600px] mt-2 tracking-wide font-AvenirLight leading-[23px] text-center text-base text-white/[0.8]">
        Selecting your top 5 movies will enable us to suggest like-minded users
        and nearby communities for exciting watch parties and movie premiere
        gatherings
      </p>
      <SearchBar />
      <div className="w-screen h-[171px] fixed bottom-0 flex items-center justify-center bg-white/[0.08]">
        <div className="w-[576px] h-123px flex justify-between items-end">
          <div className="w-[272px] text-xl flex flex-col gap-6">
            <div>Your top 5 selections</div>
            <div className="flex w-full gap-2">
              <Selection />
              <Selection />
              <Selection />
              <Selection />
              <Selection />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={"/onboarding/genres"} className="cursor-pointer w-[256px] h-12 border-2 flex justify-center items-center rounded-lg text-base">
              Back
            </Link>
            <Link href={"/onboarding/genres"} className="cursor-pointer w-[256px] h-12 border-2 flex justify-center items-center rounded-lg text-base">
              Skip
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[696px] mt-14">
        <h2 className="text-xl tracking-wide">
          Movies you might like
        </h2>
        <div>

        </div>
      </div>
    </>
  );
}

function Selection() {
  return (
    <div className="w-12 h-[72px] border-2 border-white/[0.4] border-dashed"></div>
  );
}
