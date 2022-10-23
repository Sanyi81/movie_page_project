import {useDispatch} from "react-redux";

const Genre = (genre) => {
  const dispatch = useDispatch();

  const {id, name} = genre;

  return (
      <div>
        <div>id: {id}</div>
        <div>name: {name}</div>
      </div>
  )
}

export {Genre};