import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

const Header = () => {
  const {currentMovie} = useSelector(state => state.movieReducer);
  const {currentGenre} = useSelector(state => state.genreReducer)

    const navigate = useNavigate();

  return (
      <div>
        {currentMovie && currentMovie.title}
        {currentGenre && currentGenre.name}
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={navigate('/login')}>Login</button>
      </div>
  )
}

export {Header};