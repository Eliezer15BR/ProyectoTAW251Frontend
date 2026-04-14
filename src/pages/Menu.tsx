import imgPastaALaBrasa from '../assets/pastaALaBrasa.png';
import imgPolloAlCarbon from '../assets/polloAlCarbon.jpg'
import {useCarro} from '../context/CarroContext'
const imgMenu='https://images.unsplash.com/photo-1555244162-803834f70033';
function Menu() {
  const {addPlato} = useCarro();
  const menuData = [
    {
      categoria: "🔥 Parrillas",
      items: [
        {
          nombre: "Bife de Chorizo",
          precio: 120,
          ingredientes: "Carne de res, sal gruesa, chimichurri",
          imagen: "https://images.unsplash.com/photo-1558030006-450675393462"
        },
        {
          nombre: "Costillas BBQ",
          precio: 95,
          ingredientes: "Costillas de cerdo, salsa BBQ, especias",
          imagen: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        }
      ]
    },
    {
      categoria: "🍝 Especialidades",
      items: [
        {
          nombre: "Pasta a la Brasa",
          precio: 70,
          ingredientes: "Pasta artesanal, salsa de tomate, carne ahumada",
          imagen: imgPastaALaBrasa,
        },
        {
          nombre: "Pollo al Carbón",
          precio: 65,
          ingredientes: "Pollo marinado, papas, ensalada",
          imagen: imgPolloAlCarbon
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50">

      <section className="h-[50vh] bg-fixed bg-cover bg-center flex items-center justify-center relative"
      style={{backgroundImage:`url(${imgMenu})`}}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-4xl md:text-6xl text-white font-custom">
          Nuestro Menú
        </h1>
      </section>

      <section className="py-16 px-6 md:px-20">

        {menuData.map((categoria, index) => (
          <div key={index} className="mb-16">

            <h2 className="text-3xl md:text-4xl font-custom mb-8 text-gray-800">
              {categoria.categoria}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {categoria.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >

                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.imagen}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  
                  <div className="p-5">

                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">
                        {item.nombre}
                      </h3>
                      <span className="text-amber-600 font-bold">
                        {item.precio} Bs
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm">
                      {item.ingredientes}
                    </p>

                    <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-amber-600 transition"
                      onClick={()=>addPlato({
                        id:i,
                        nombre: item.nombre,
                        precio:item.precio
                      }
                      )}
                    >
                      Ordenar
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}

      </section>
    </div>
  );
}

export default Menu;
