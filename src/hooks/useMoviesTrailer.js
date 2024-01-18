import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TMDB } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const moviesTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMoviesVideo = async () => {
    const data = await fetch(`${API_TMDB} ${movieId}"/videos`, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !moviesTrailer && getMoviesVideo();
  }, []);
};
export default useMoviesTrailer;
