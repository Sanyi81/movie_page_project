import {useSelector} from "react-redux";

const Header = () => {
  const {currentMovie} = useSelector(state => state.movieReducer);
  const {currentGenre} = useSelector(state => state.genreReducer)
  return (
      <div>
        {currentMovie && currentMovie.title}
        {currentGenre && currentGenre.name}
      </div>
  )
}

export {Header};