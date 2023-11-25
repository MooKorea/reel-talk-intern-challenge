import { useQueryState } from "next-usequerystate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../_state/genreSlice";
import { RootState } from "../_state/store";

export default function useOnboardingSave(progress: number) {
  //progress bar state
  const [_progress, setProgress] = useQueryState("progress");

  const [genre, setGenre] = useQueryState("genre");
  const genresArr = useSelector((state: RootState) => state.genre.value);

  const dispatch = useDispatch();

  useEffect(() => {
    setProgress(progress.toString());
    if (genre !== null) {
      dispatch(set(genre));
    }
    if (genresArr.length !== 0) {
      setGenre(genresArr.join());
    }
  }, []);
}
