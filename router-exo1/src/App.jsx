import './App.css'
import Home from "./component/Home/index.jsx";
import Detail from "./component/Detail/index.jsx";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/detail/:id'} element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
