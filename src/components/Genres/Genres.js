import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "@types/react";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {
  const dispatch = useDispatch();
  const {genres, error, loading, genreFromAPI} = useSelector(state => state.genreReducer);


  useEffect(() => {
    dispatch(genreActions.getAll())
  }, [])
  return (
      <div>
        {loading && <h2>Loading...</h2>}
        {error && JSON.stringify(error)}
        {genreFromAPI && genreFromAPI.name}
        {genres.map(genre => <Genre key={genre.id} movie={genre}/>)}
      </div>
  )
}

export {Genres};