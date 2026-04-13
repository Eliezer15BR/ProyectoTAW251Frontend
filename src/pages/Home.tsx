import { Link } from 'react-router-dom';
import bgImage from '../assets/backgroundHome.jpeg';
import imageLogo from '../assets/logoMain.png';
import CardDescripcion from '../components/CardDescripcion';
function Home(){
    const imagenesCocina: string[]=[
        'https://images.unsplash.com/photo-1555992336-03a23c7b20ee',
        'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        'https://images.unsplash.com/photo-1544025162-d76694265947' 
    ]
    const descripciones=[
        {
            titulo:"🔥 Brasa auténtica",
            descripcion:"Cocción lenta y precisa que resalta cada sabor."
        },
        {
            titulo:"🍷 Ambiente único",
            descripcion:"Un espacio cálido para compartir momentos especiales."
        },
        {
            titulo:"👨‍🍳 Tradición",
            descripcion:"Recetas que han pasado de generación en generación."
        }
    ]
    return (
        <>
            <div className="w-full"> 
                <section className="h-150 bg-fixed bg-center bg-cover flex items-center justify-center relative" 
                style={{ backgroundImage: `url(${bgImage})` }} > 
                
                <div className="absolute inset-0 bg-black/50"></div> 
                    <div className="relative text-center px-4"> 
                        <h1 className="text-4xl md:text-6xl text-white font-custom"> 
                            El Fuego Sagrado 
                        </h1> 
                        <p className="text-lg md:text-2xl text-gray-200 mt-4"> 
                            Cocina tradicional y brasa 
                        </p> 
                        <p className="text-sm md:text-lg text-gray-300 mt-2">
                            Más que un restaurante, una experiencia 
                        </p> 
                        <Link to='/menu' className="inline-block mt-6 px-6 py-3 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-400 hover:scale-105 transition-all"> 
                            Ordenar
                        </Link> 
                    </div> 
                </section>
                <section className="py-20 px-6 md:px-20 bg-white text-center flex flex-col items-center justify-center"> 
                    <h2 className="text-3xl md:text-4xl font-custom mb-6"> Nuestra esencia </h2> 
                    <p className="max-w-2xl text-gray-600"> 
                        En El Fuego Sagrado combinamos la tradición culinaria con el arte de la brasa. Más de 10 años creando experiencias únicas, donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable. 
                    </p>
                    <div>
                        <img src={imageLogo} alt="Imagen restaurante" className='mt-10 h-40'/>
                    </div>
                </section>
                <section className="py-20 px-6 md:px-20 bg-gray-100"> 
                    <h2 className="text-3xl md:text-4xl text-center font-custom mb-10"> Nuestra cocina </h2> 
                    <div className="grid md:grid-cols-3 gap-6">
                        {imagenesCocina.map((link)=>(
                                <img src={link} className="rounded-xl h-64 w-full object-cover"/>
                            ))}
                    </div> 
                </section> 
                <section className="py-20 px-6 md:px-20 bg-white text-center"> 
                    <h2 className="text-3xl md:text-4xl font-custom mb-6"> Vive la experiencia </h2> 
                    <div className="grid md:grid-cols-3 gap-8 mt-10"> 
                        {
                            descripciones.map(({titulo,descripcion})=>(
                                <CardDescripcion titulo={titulo} descripcion={descripcion}/>
                            ))
                        }
                    </div> 
                </section>
                <section className="py-20 bg-amber-600 text-center text-black"> 
                    <h2 className="text-3xl md:text-4xl font-custom mb-4"> Reserva tu mesa </h2> 
                    <p className="mb-6"> Descubre por qué somos más que un restaurante </p> 
                    <Link to='/menu' className="inline-block px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition-all duration-300"> 
                        Ordenar 
                    </Link> 
                </section> 
            </div>
        </>
    )
}
export default Home;