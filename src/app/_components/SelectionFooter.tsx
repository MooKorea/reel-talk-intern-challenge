import Link from "next/link";
import { mediaType } from "../onboarding/layout";

interface Footer {
  selection: mediaType[];
  selectionContainers: React.ReactNode[]
  nextPage: string;
  previousPage: string;
}

export default function Footer({ selection, selectionContainers, nextPage, previousPage }: Footer) {
  return (
    <div className="w-screen h-[171px] fixed bottom-0 flex items-center justify-center bg-[#333333]">
      <div className="w-[576px] h-123px flex justify-between items-end">
        <div className="w-[272px] text-xl flex flex-col gap-6">
          <div>Your top 5 selections</div>
          <div className="flex w-full gap-2">
            {selectionContainers.map((e) => {
              return e;
            })}
          </div>
        </div>
        <NavButtons selection={selection} nextPage={nextPage} previousPage={previousPage} />
      </div>
    </div>
  );
}

interface NavButtons {
  selection: mediaType[];
  nextPage: string;
  previousPage: string;
}

function NavButtons({ selection, nextPage, previousPage }: NavButtons) {
  const buttonStyle =
    "cursor-pointer w-[256px] h-12 flex justify-center items-center rounded-lg text-base";
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={
          selection.length > 0 ? nextPage : previousPage
        }
        className={
          buttonStyle +
          (selection.length > 0
            ? " bg-primary text-black font-AvenirHeavy"
            : " border-2")
        }
      >
        {selection.length > 0 ? "Next" : "Back"}
      </Link>
      <Link
        href={
          selection.length > 0 ? previousPage : nextPage
        }
        className={buttonStyle + " border-2"}
      >
        {selection.length > 0 ? "Back" : "Skip"}
      </Link>
    </div>
  );
}
