import Link from "next/link";
import { movieData } from "./page";
import Selection from "./Selection";

interface Footer {
  selection: movieData[];
  setSelection: React.Dispatch<React.SetStateAction<movieData[]>>;
}

export default function Footer({ selection, setSelection }: Footer) {
  let container: React.ReactNode[] = [];
  for (let i = 0; i < 5; i++) {
    container = [
      ...container,
      <Selection key={i} setSelection={setSelection} data={selection[i]} />,
    ];
  }
  return (
    <div className="w-screen h-[171px] fixed bottom-0 flex items-center justify-center bg-[#333333]">
      <div className="w-[576px] h-123px flex justify-between items-end">
        <div className="w-[272px] text-xl flex flex-col gap-6">
          <div>Your top 5 selections</div>
          <div className="flex w-full gap-2">
            {container.map((e) => {
              return e;
            })}
          </div>
        </div>
        <NavButtons selection={selection} />
      </div>
    </div>
  );
}

interface NavButtons {
  selection: movieData[];
}

function NavButtons({selection} : NavButtons) {
  const buttonStyle = "cursor-pointer w-[256px] h-12 flex justify-center items-center rounded-lg text-base"
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={selection.length > 0 ? "/onboarding/tvshows" : "/onboarding/genres"}
        className={buttonStyle + (selection.length > 0 ? " bg-primary text-black font-AvenirHeavy" : " border-2" )}
      >
        {selection.length > 0 ? "Next" : "Back"}
      </Link>
      <Link
        href={selection.length > 0 ? "/onboarding/genres" : "/onboarding/tvshows"}
        className={buttonStyle + " border-2"}
      >
        {selection.length > 0 ? "Back" : "Skip"}
      </Link>
    </div>
  );
}
