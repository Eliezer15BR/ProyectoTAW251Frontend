import { useState } from "react";
import { useCarro } from "../context/CarroContext";


function Carro(){
    const [isOpen, setIsOpen] = useState(false);
    const { carro, elimPlato } = useCarro();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md 
                     shadow-sm px-4 py-2 bg-amber-600 
                    text-sm font-medium text-white hover:bg-black
                    focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
                    <svg
                        className="ml-2 -mr-1 h-5 w-5"
                        xmlns="https://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
      className="origin-top-right absolute right-0 mt-2 w-72 
      rounded-md shadow-lg bg-white ring-1 ring-black/10 z-50"
    >
      <div className="py-2">

        {Array.from(carro).length === 0 ? (
          <p className="px-4 py-2 text-sm text-gray-500">
            Carrito vacío
          </p>
        ) : (
          <>
            {Array.from(carro).map((item) => (
              <div
                key={item[0]}
                className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
              >
                <div>
                  <p className="text-sm font-medium">
                    {item[1].plato.nombre}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item[1].cantidad} x {item[1].plato.precio} Bs
                  </p>
                </div>

                <button
                  onClick={() => elimPlato(item[1].plato)}
                  className="text-red-500 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="border-t mt-2 pt-2 px-4">
              <p className="text-sm font-semibold">
                Total:{" "}
                {Array.from(carro).reduce(
                  (acc, item) => acc + item[1].plato.precio * item[1].cantidad,
                  0
                )} Bs
              </p>
            </div>

            <div className="px-4 mt-2">
              <button className="w-full bg-black text-white py-2 rounded">
                Ir al carrito
              </button>
            </div>
          </>
        )}

      </div>
    </div>
            )}
        </div>
    );
};

export default Carro;
