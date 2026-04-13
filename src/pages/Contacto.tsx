import imgMapa from '../assets/mapa.png'
function Contacto() {
    const imgFondo = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
  return (
    <>
      <section className="h-[50vh] bg-fixed bg-cover bg-center flex items-center justify-center relative"
        style={{backgroundImage:`url(${imgFondo})`}}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl text-white">
          Contáctanos
        </h1>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-custom mb-6">
            Información
          </h2>

          <p className="text-gray-600 mb-4">
            📍 Dirección: Av. Principal 123
          </p>
          <p className="text-gray-600 mb-4">
            📞 Teléfono: +591 70000000
          </p>
          <p className="text-gray-600 mb-4">
            📧 Email: fuegosagrado@gmail.com
          </p>
          <p className="text-gray-600">
            🕒 Horario: 12:00 - 23:00
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo"
            className="border p-3 rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            rows={5}
            className="border p-3 rounded-lg"
          ></textarea>

          <button
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Enviar mensaje
          </button>
        </form>

      </section>

      <section className=" px-6 md:px-20 py-10 flex items-center justify-center">
            <img src={imgMapa} alt="Direccion del restaurante" 
            className=' object-cover rounded-xl'/>
      </section>

    </>
  );
}

export default Contacto;
