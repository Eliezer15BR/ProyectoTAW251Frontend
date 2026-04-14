import { useEffect, type SetStateAction, type Dispatch } from 'react';
import LogoRestaurante from '../assets/logo.svg?react'
interface Props{
    login:boolean,
    setMostrarForm: Dispatch<SetStateAction<boolean>>,
    setLogin: Dispatch<SetStateAction<boolean>>,
}
function FormLogin({login, setMostrarForm, setLogin}:Props){
    useEffect(()=>{
        const handleOpen = (e: KeyboardEvent) => {
            if (e.key==="Escape")
                setMostrarForm(false);
        };
        window.addEventListener('keydown',handleOpen);
        return () => window.addEventListener("keydown", handleOpen);
    },[setMostrarForm])
    return(
        <>
        <div className='fixed z-9998 opacity-45 w-full h-full bg-black top-0 left-0' 
            onClick={()=>{setMostrarForm(false)}}
        ></div>
            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 fixed top-2 left-1/3 z-9999"
            >
            <LogoRestaurante className='h-20 w-20 m-auto'/>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                {(login)?"Bienvenido de nuevo":"Registrarse"}
            </h2>
            <form>
                {(!login)
                    ?(<>
                        <input className='w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4' type="text" placeholder='Nombre' required/>
                        <input className='w-full bg-transparent border border-gray-500/30 outline-none rounded-full py-2.5 px-4' type="text" placeholder='Apellido' required/>
                    </>)
                    :<></>}
                <input id="email" className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Correo" required />
                <input id="password" className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Contraseña" required />
                {
                    (!login)
                    ? <input className='w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4' type="text" placeholder='Ingrese de nuevo la contraseña' required/>
                    : <></>
                }
                <button type="submit" className="w-full mb-3 bg-amber-700 py-2.5 rounded-full text-white cursor-pointer btn-animated">
                    {(login)?"Ingresar":"Registrarse"}
                </button>
            </form>
            <p className="text-center mt-4">
                {
                    (login)?"¿No tienes una cuenta? ":"¿Tienes ya una cuenta? "
                } 
                <button className="text-blue-500 underline"
                    onClick={()=>{setLogin(!login)}}
                >
                    {
                        (!login)?"Ingresar":"Registrarse"
                    }
                </button>
            </p>
            <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 cursor-pointer btn-animated">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Ingresar con Google
            </button>
        </div>
    </>
    )
}
export default FormLogin;