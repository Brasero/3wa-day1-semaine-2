import { Routes, Route } from 'react-router-dom'
import ControlForm from "./component/ControlForm/index.jsx";
import Home from "./component/Home/index.jsx"
import Nav from "./component/Nav/index.jsx";
import TextArea from "./component/TextArea/index.jsx";
import Exemple from "./component/Exemple/index.jsx";
import NotFound from "./component/NotFound/index.jsx";
import Hello from "./component/Home/Hello/index.jsx";
import Bye from "./component/Home/Bye/index.jsx";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={<ControlForm />} />
          <Route path={'/home'} element={<Home />} >
            <Route path={'hello'} element={<Hello />} />
            <Route path={'bye'} element={<Bye />}  />
          </Route>
        <Route path={'/text'} element={<TextArea />} />
        <Route path={'/exemple/:id'} element={<Exemple />} />

        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
