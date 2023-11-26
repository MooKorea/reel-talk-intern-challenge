interface ThumbnailGrid {
  children: React.ReactNode;
  title: string;
}

//Grids of movies & TV shows
export default function ThumbnailGrid({ children, title }: ThumbnailGrid) {
  return (
    <div className="w-[696px] mt-14">
      <h2 className="text-xl tracking-wide">{title}</h2>
      <div className="mt-4 mb-[270px] grid gap-2 grid-cols-6">{children}</div>
    </div>
  );
}
