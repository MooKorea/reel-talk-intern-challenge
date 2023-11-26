import { useQueryState } from "next-usequerystate";

export default function ProgressBar() {
  return (
    <div className="relative w-[430px] mt-14 flex justify-center items-center">
      <div className="absolute w-[calc(100%-1.25rem)] flex items-center justify-between">
        <Line index={1} />
        <Line index={2} />
        <Line index={3} />
        <Line index={4} />
      </div>
      <div className="absolute w-full flex items-center justify-between">
        <Dot index={0} />
        <Dot index={1} />
        <Dot index={2} />
        <Dot index={3} />
        <Dot index={4} />
      </div>
    </div>
  );
}

function Dot({ index }: { index: number }) {
  //This is the URL query param, 0-4
  const [progress, _setProgress] = useQueryState("progress");
  return (
    <div
      className={
        "w-5 h-5 bg-[#6d6d6d] flex items-center justify-center rounded-full " +
        (parseInt(progress!) >= index ? "bg-primary" : "bg-[#6d6d6d]")
      }
    >
      {parseInt(progress!) === index && (
        <div className="w-3 h-3 bg-white/[0.6] rounded-full"></div>
      )}
    </div>
  );
}

function Line({ index }: { index: number }) {
  const [progress, _setProgress] = useQueryState("progress");
  return (
    <div
      className={
        "h-1 grow " +
        (parseInt(progress!) >= index ? "bg-primary" : "bg-[#6d6d6d]")
      }
    ></div>
  );
}
