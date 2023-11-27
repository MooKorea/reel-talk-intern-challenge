import { useQueryState } from "next-usequerystate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, genreState, tvshowState, movieState } from "../_state/store";

export default function useOnboardingSave(progress: number) {
  //progress bar state
  const [_progress, setProgress] = useQueryState("progress");

  const [genre, setGenre] = useQueryState("genre");
  const genresArr = useSelector((state: RootState) => state.genre.value);

  const [movie, setMovie] = useQueryState("movie");
  const moviesArr = useSelector((state: RootState) => state.movie.value);

  const [tvshow, setTVshow] = useQueryState("tvshow");
  const tvshowArr = useSelector((state: RootState) => state.tvshow.value);

  const dispatch = useDispatch();

  useEffect(() => {
    setProgress(progress.toString());

    //The following checks ensure the state is not overwritten with an empty value
    //Whenever the route changes, the hook will immediately store the URL query params in redux's global state
    //The second if statement pushes the state back to the URL
    if (genre !== null) {
      dispatch(genreState.replace(genre));
    }
    if (genresArr.length !== 0) {
      setGenre(genresArr.join());
    }

    if (movie !== null) {
      dispatch(movieState.replace(movie));
    }
    if (moviesArr.length !== 0) {
      setMovie(moviesArr.join());
    }

    if (tvshow !== null) {
      dispatch(tvshowState.replace(tvshow));
    }
    if (tvshowArr.length !== 0) {
      setTVshow(tvshowArr.join());
    }
  }, []);
}
