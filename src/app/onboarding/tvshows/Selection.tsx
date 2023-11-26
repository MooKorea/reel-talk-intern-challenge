import { movieData } from "./page";
import { removeMovie } from "@/app/_state/movieSlice";
import { useDispatch } from "react-redux";

interface Selection {
  setSelection: React.Dispatch<React.SetStateAction<movieData[]>>;
  data: {
    src: string;
    label: string;
  };
}

export default function Selection({ setSelection, data }: Selection) {
  const dispatch = useDispatch();

  return (
    <div
      className="cursor-pointer relative w-12 h-[72px] border-2 border-white/[0.4] border-dashed"
      onClick={() => {
        dispatch(removeMovie(data.label));
        setSelection((prev) => {
          return prev.filter((e) => e !== data);
        });
      }}
    >
      {data !== undefined && (
        <>
          <img src={data.src} alt={data.label} className="object-cover" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className="absolute top-[-6px] right-[-6px]"
          >
            <path
              fill="#fff"
              d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8z"
            ></path>
            <path stroke="#222" strokeWidth="1.333" d="M4 8L12 8"></path>
          </svg>
        </>
      )}
    </div>
  );
}
