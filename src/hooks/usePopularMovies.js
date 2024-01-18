import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TMDB } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector((store) => store.movies.popularMovies);
  const getNowPopularMovies = async () => {
    const data = await fetch(API_TMDB + "/popular", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !nowPopularMovies && getNowPopularMovies();
  }, []);
};

export default usePopularMovies;
