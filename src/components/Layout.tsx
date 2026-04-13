import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FormLogin from './FormLogin';
import { useState } from 'react';
function Layout(){
    const [mostrarForm, setMostrarForm] = useState(false);
    const [login, setLogin] = useState(true);
    return(
        <div className='relative'>
            <Navbar setMostrarForm={setMostrarForm} setLogin={setLogin}/>
            <main>
                <Outlet/>
                {
                    mostrarForm && (<FormLogin login={login} setMostrarForm={setMostrarForm} setLogin={setLogin}/>)
                }
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;