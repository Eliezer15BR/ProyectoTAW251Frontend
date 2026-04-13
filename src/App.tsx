import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
