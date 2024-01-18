import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import { API_EMBED_YOUTUBE } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          API_EMBED_YOUTUBE +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0"
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
