import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="catering" element={<Catering/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacto" element={<Contacto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
