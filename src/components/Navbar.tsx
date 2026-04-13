import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoRestaurante from '../assets/logo.svg?react'

function Navbar(){
     const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Menú', path: '/menu' },
        { name: 'Ordenar', path: '/'},
        { name: 'Catering', path: '/' },
        { name: 'Sobre Nosotros', path: '/' },
        { name: 'Contacto', path: '/'}
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header>
            <div className="h-40 md:h-40 ">
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
                ${isScrolled 
                    ? "py-3 md:py-4 bg-amber-900" 
                    : "py-4 md:py-6 bg-amber-700"}`}>
                <LogoRestaurante className={`text-white transition-all duration-500
                    ${isScrolled
                        ? "h-15 w-15"
                        : "h-25 w-25"
                    }
                    `}/>
                
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group ml-2 flex flex-col gap-0.5 text-white`}>
                            {link.name}
                            <div className={`bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <button className={`hover:scale-105 cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-amber-600" : "bg-amber-200 text-black"}`}>
                        Iniciar Sesión
                    </button>
                    <button className={`hover:scale-105 border px-8 py-2.5 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-amber-100' : 'text-amber-200'} transition-all`}>
                        Registrarse
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        New Launch
                    </button>

                    <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                </div>
            </nav>
        </div>
        </header>
    )
}
export default Navbar;