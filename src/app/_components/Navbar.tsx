import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="text-secondary flex gap-3 justify-center h-14 bg-white text-black">
      <div className="w-[1120px] h-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <Image height={26} width={24} src="/Reel-Talk-Logo.png" alt="Reel Talk Logo"/>
            <div className="font-AvenirBlack text-[17px] whitespace-nowrap">
              REEL TALK
            </div>
          </div>
          <div>Browse</div>
          <div>Community</div>
          <div>Discussions</div>
        </div>
        <div className="pl-6 relative flex items-center gap-[10px] h-[34px] w-[351px] rounded-md bg-black/[.08]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
          >
            <path
              fill="#fff"
              fillOpacity="0.6"
              d="M.5 6.471C.5 2.903 3.431 0 7.034 0c3.603 0 6.535 2.903 6.535 6.471 0 1.476-.5 2.83-1.343 3.917l4.004 3.99c.172.17.27.406.27.665 0 .543-.385.957-.942.957a.97.97 0 01-.696-.276l-4.028-3.998a6.52 6.52 0 01-3.8 1.217C3.431 12.943.5 10.04.5 6.47zm1.4 0c0 2.806 2.301 5.085 5.134 5.085s5.134-2.279 5.134-5.085-2.3-5.084-5.134-5.084C4.201 1.387 1.9 3.665 1.9 6.47z"
            ></path>
          </svg>
          <input
            className="placeholder-[#6d6d6d] pl-12 absolute outline-none left-0 h-full w-full font-AvenirLight bg-transparent focus:placeholder:opacity-0"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div>Watchlist</div>
          <div className="flex items-center gap-[6px]">
            <Image width={40} height={40} src="/Profile.png" alt="profile picture" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              fill="none"
              viewBox="0 0 13 8"
            >
              <path
                fill="#222"
                d="M6.17 7.475a.63.63 0 01-.456-.2L.357 1.807a.62.62 0 01-.187-.455C.17 1 .44.725.799.725c.18 0 .332.069.45.18l4.92 5.024L11.093.904a.657.657 0 01.449-.18c.36 0 .629.277.629.629 0 .18-.062.331-.18.455L6.626 7.274a.619.619 0 01-.456.2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
