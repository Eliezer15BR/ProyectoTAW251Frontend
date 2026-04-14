import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import LogoRestaurante from '../assets/logo.svg?react'
import Carro from "./Carro";
interface Props{
    setLogin: Dispatch<SetStateAction<boolean>>,
    setMostrarForm: Dispatch<SetStateAction<boolean>>,
}
function Navbar({setLogin, setMostrarForm}:Props){
     const enlaces = [
        { name: 'Inicio', path: '/' },
        { name: 'Menú', path: '/menu' },
        { name: 'Catering', path: '/catering' },
        { name: 'Sobre Nosotros', path: '/about' },
        { name: 'Contacto', path: '/contacto    '}
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header>
            <div className="h-30 md:h-30 ">
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
                ${isScrolled 
                    ? "py-3 md:py-4 bg-amber-900" 
                    : "py-4 md:py-6 bg-amber-700"}`}>
                <LogoRestaurante className={`text-white transition-all duration-500
                    ${isScrolled
                        ? "h-15 w-15"
                        : "h-20 w-20"
                    }
                    `}/>
                
                <div className="md:flex items-center gap-4 lg:gap-8">
                    {enlaces.map((link, i) => (
                        <Link key={i} to={link.path} className={`group ml-2 flex flex-col gap-0.5 text-white`}>
                            {link.name}
                            <div className={`bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                </div>

                <div className="md:flex items-center gap-4">
                    <button className={`hover:scale-105 cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-amber-600" : "bg-amber-200 text-black"}`}
                        onClick={()=>{setLogin(true); setMostrarForm(true)}}
                    >
                        Iniciar Sesión
                    </button>
                    <button className={`hover:scale-105 border px-8 py-2.5 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-amber-100' : 'text-amber-200'} transition-all`}
                        onClick={()=>{setLogin(false); setMostrarForm(true)}}
                    >
                        Registrarse
                    </button>
                </div>
                <Carro/>
            </nav>
        </div>
        </header>
    )
}
export default Navbar;