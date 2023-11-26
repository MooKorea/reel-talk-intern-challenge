import { useQueryState } from "next-usequerystate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceGenre } from "../_state/genreSlice";
import { replaceMovie } from "../_state/movieSlice";
import { RootState } from "../_state/store";

export default function useOnboardingSave(progress: number) {
  //progress bar state
  const [_progress, setProgress] = useQueryState("progress");

  const [genre, setGenre] = useQueryState("genre");
  const genresArr = useSelector((state: RootState) => state.genre.value);

  const [movie, setMovie] = useQueryState("movie")
  const moviesArr = useSelector((state: RootState) => state.movie.value)

  const dispatch = useDispatch();

  useEffect(() => {
    setProgress(progress.toString());
    if (genre !== null) {
      dispatch(replaceGenre(genre));
    }
    if (genresArr.length !== 0) {
      setGenre(genresArr.join());
    }

    if (movie !== null) {
      dispatch(replaceMovie(movie));
    }
    if (moviesArr.length !== 0) {
      setMovie(moviesArr.join());
    }


  }, []);
}
