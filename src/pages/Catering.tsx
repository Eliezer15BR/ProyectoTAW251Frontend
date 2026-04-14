const imgCatering='https://images.unsplash.com/photo-1555244162-803834f70033';
function Catering() {
  return (
    <>
      <section className="h-[50vh] bg-fixed bg-cover bg-center flex items-center justify-center relative"
        style={{backgroundImage:`url(${imgCatering})`}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl text-white font-custom text-center">
          Servicio de Catering
        </h1>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-custom mb-6">
          Lleva nuestra experiencia a tu evento
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Ofrecemos servicios de catering para eventos especiales: bodas,
          cumpleaños, eventos corporativos y más. Disfruta de nuestra cocina
          tradicional a la brasa donde quieras.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Solicita tu catering
          </h2>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />

            <select className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500">
              <option>Boda</option>
              <option>Cumpleaños</option>
              <option>Evento corporativo</option>
              <option>Otro</option>
            </select>

            <input
              type="date"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />

            <input
              type="number"
              placeholder="Número de invitados"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              required
            />

            <textarea
              placeholder="Cuéntanos más detalles de tu evento..."
              rows={4}
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-600 transition"
            >
              Enviar solicitud
            </button>

          </form>
        </div>
        <div className="py-3 px-6 md:px-20 text-center">
            <p className="max-w-2xl mx-auto text-gray-600">
                Nos contactaremos contigo en breve
            </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-custom text-center mb-10">
          Nuestros eventos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
            className="rounded-xl h-60 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            className="rounded-xl h-60 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            className="rounded-xl h-60 w-full object-cover"
          />
        </div>
        
      </section>

    </>
  );
}

export default Catering;
