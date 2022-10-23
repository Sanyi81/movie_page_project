import {Routes, Route} from "react-router-dom";

import './App.css';
import {Genres, Header, Movies} from "./components";
import {MainLayout} from '../src/layout/MainLayout'

function App() {
  return (
    <div>
      <Header/>
      <Movies/>
      <Genres/>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/login'}/>}/>
            <Route path={'/login'} element={}/>
            <Route path={'/register'} element={}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
