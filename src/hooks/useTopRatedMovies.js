import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movie);

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
