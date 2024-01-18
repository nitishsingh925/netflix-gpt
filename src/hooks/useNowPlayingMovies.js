import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TMDB } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowplayingmovies = useSelector(
    (store) => store.movies.nowplayingmovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_TMDB + "/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowplayingmovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
