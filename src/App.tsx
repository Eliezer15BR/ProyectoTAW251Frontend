import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import About from "./pages/About";
import Contacto from "./pages/Contacto";
import {CarroProvider} from './context/CarroContext';
function App() {
  return (
    <CarroProvider>
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
    </CarroProvider>
  )
}

export default App
