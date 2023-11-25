export default function SearchBar() {
  return (
    <div className="relative h-14 w-[544px] rounded-md bg-white/[.05] mt-7 flex items-center gap-[10px] pl-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          fillOpacity="0.6"
          d="M0 6.471C0 2.903 2.931 0 6.534 0c3.603 0 6.535 2.903 6.535 6.471 0 1.476-.5 2.83-1.343 3.917l4.004 3.99c.172.17.27.406.27.665 0 .543-.385.957-.942.957a.97.97 0 01-.696-.276l-4.028-3.998a6.52 6.52 0 01-3.8 1.217C2.931 12.943 0 10.04 0 6.47zm1.4 0c0 2.806 2.301 5.085 5.134 5.085s5.134-2.279 5.134-5.085-2.3-5.084-5.134-5.084C3.701 1.387 1.4 3.665 1.4 6.47z"
        ></path>
      </svg>
      <input
        className="absolute outline-none left-0 pl-[50px] h-full w-full font-AvenirLight text-base bg-transparent placeholder-white/[0.7] focus:placeholder:opacity-0"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
