import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {
  const dispatch = useDispatch();
  const {movies, error, loading, movieFromAPI} = useSelector(state => state.movieReducer);


  useEffect(() => {
    dispatch(movieActions.getAll())
  }, [])
  return (
      <div>
        {loading && <h2>Loading...</h2>}
        {error && JSON.stringify(error)}
        {movieFromAPI && movieFromAPI.title}
        {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
  )
}

export {Movies};