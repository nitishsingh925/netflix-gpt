import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TMDB } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topReatedMovies = useSelector((store) => store.movies.topReatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(API_TMDB + "/top_rated", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topReatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
