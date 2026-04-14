import { createContext, useContext, useState } from "react";
type Plato = {
  id: number;
  nombre: string;
  precio: number;
};
type ItemCarro={
    plato:Plato,
    cantidad: number,
}
type CarroContextType = {
  carro: Map<number,ItemCarro>,
  addPlato: (plato: Plato) => void;
  elimPlato: (plato: Plato) => void;
  addOnePlato: (plato: Plato) => void;
  vaciar: () => void;
};
const CarroContext = createContext<CarroContextType|null> (null);
export function CarroProvider({children}:{children: React.ReactNode}){
    const [carro, setCarro] = useState<Map<number,ItemCarro>>(new Map());
    const addPlato =(plato:Plato)=>{
        setCarro(prev=>{
            const cant=prev.get(plato.id)?.cantidad||0;
            prev.set(plato.id,{plato,cantidad: cant+1 });
            return new Map(prev);
        })
    }
    const elimPlato=(plato:Plato)=>{
        setCarro(prev=>{
            prev.delete(plato.id);
            return new Map(prev);
        })
    }
    const addOnePlato=(plato:Plato)=>{
        setCarro(prev=>{
            const cant=prev.get(plato.id)?.cantidad||0;
            if(cant-1<=0 || (cant-1)===isNaN) prev.delete(plato.id);
            else prev.set(plato.id,{plato,cantidad: cant-1});
            return new Map(prev);
        })
    }
    const vaciar=()=>{
        setCarro(new Map());
    }
    return (
        <CarroContext.Provider value={{carro, addPlato, addOnePlato, elimPlato, vaciar}}>
            {children}
        </CarroContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export function useCarro():CarroContextType{
    const context= useContext(CarroContext);
    if(!context) throw new Error("useCart debe usarse dentro del provider")
    return context;
}