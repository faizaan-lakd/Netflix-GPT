import { API_OPTIONS, POPULAR_TV_SHOW_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movie);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_TV_SHOW_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
