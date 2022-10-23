import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";

const Movie = ({movie}) => {
  const dispatch = useDispatch();

  const {id, title, release_date, vote_average, poster_path} = movie;

  return (
      <div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>release_date: {release_date}</div>
        <div>vote_average: {vote_average}</div>
        <img src={poster_path} alt=""/>
        <button onClick={() => dispatch(movieActions.setCurrentMovie(movie))}>Select</button>
        <button onClick={() => dispatch(movieActions.getById({id}))}>getFromAPI</button>
      </div>
  )
}

export {Movie};