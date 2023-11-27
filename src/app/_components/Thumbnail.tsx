import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_state/store";
import { useQueryState } from "next-usequerystate";
import { mediaType } from "../onboarding/layout";
import { AnyAction } from "@reduxjs/toolkit";
import Image from "next/image";

interface Thumbnail {
  data: mediaType;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  selection: mediaType[];
  setSelection: React.Dispatch<React.SetStateAction<mediaType[]>>;
  urlSearchParam: string;
  removeAction: AnyAction;
  addAction: AnyAction;
  rootState: (state: RootState) => string[]
}

export default function Thumbnail({
  data,
  count,
  setCount,
  selection,
  setSelection,
  urlSearchParam,
  removeAction,
  addAction,
  rootState
}: Thumbnail) {
  const [media, setMedia] = useQueryState(urlSearchParam);
  const dispatch = useDispatch();
  const mediaArr = useSelector(rootState);

  //ref ensures useEffect does not run on initial mount
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      setMedia(mediaArr.join());
      setCount(mediaArr.filter((e) => e !== "").length);
      return;
    }
    isMounted.current = true;
  }, [mediaArr]);

  //This reads the URL query params when the component is mounted.
  //If the item exists as a param, it is selected
  useEffect(() => {
    let selections = media?.split(",");
    if (selections === undefined) return;
    const index = selections?.indexOf(data.label);
    if (index === -1) return;
    setCount((prev) => prev + 1);
    setSelection((prev) => {
      return [...prev, data];
    });
  }, []);

  const handleChecked = () => {
    dispatch(selection.includes(data) ? removeAction : addAction);

    //This is the array of selections to be displayed in the footer.
    //The selection is removed if it is already in the array
    if (selection.includes(data)) {
      setSelection((prev) => {
        return prev.filter((e) => e !== data);
      });
    } else {
      setSelection((prev) => {
        return [...prev, data];
      });
    }
  };

  return (
    <div
      onClick={() => handleChecked()}
      className={
        "cursor-pointer relative flex flex-col gap-2 items-center w-[96px] " +
        (count >= 5 && !selection.includes(data)
          ? "pointer-events-none opacity-50"
          : "pointer-events-auto")
      }
    >
      <div
        className={
          "relative h-[144px] w-[96px] rounded-[3px] overflow-hidden " +
          (selection.includes(data) ? "outline outline-primary outline-[1.8px]" : "")
        }
      >
        <Image width={96} height={144} src={data.src} alt={data.label} />
      </div>
      <div className="font-AvenirLight text-xs text-center">{data.label}</div>
      {selection.includes(data) && <Checkmark />}
    </div>
  );
}

function Checkmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className="absolute right-2 top-2"
    >
      <rect width="20" height="20" fill="#FFA724" rx="10"></rect>
      <path
        fill="#222"
        fillRule="evenodd"
        d="M15.452 6.713a.635.635 0 010 .922l-6.33 6.087a.698.698 0 01-.96 0l-3.617-3.479a.635.635 0 010-.922.698.698 0 01.96 0l3.137 3.017 5.851-5.625a.698.698 0 01.96 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
