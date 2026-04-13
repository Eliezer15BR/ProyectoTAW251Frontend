function About() {
  return (
    <>
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-6xl text-white font-custom">
          Nuestra Historia
        </h1>
      </section>

      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-custom mb-6">
          El Fuego Sagrado
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Con más de 10 años de experiencia, El Fuego Sagrado nace con la misión
          de rescatar los sabores tradicionales y elevarlos a una experiencia
          única. Nuestra cocina a la brasa no solo es una técnica, es una forma
          de vida donde cada ingrediente es tratado con respeto y pasión.
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 leading-relaxed">
          Creemos en la conexión entre las personas, en compartir momentos y en
          disfrutar cada plato como una celebración. Nuestro equipo trabaja día
          a día para ofrecerte no solo comida, sino recuerdos.
        </p>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl text-center font-custom mb-10">
          Nuestros valores
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔥 Pasión</h3>
            <p className="text-gray-600">
              Cada plato es preparado con dedicación y amor por la cocina.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🌱 Calidad</h3>
            <p className="text-gray-600">
              Ingredientes frescos y seleccionados cuidadosamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🤝 Experiencia</h3>
            <p className="text-gray-600">
              Más que comida, creamos momentos inolvidables.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          className="w-full h-100 object-cover rounded-xl"
        />
      </section>

    </>
  );
}

export default About;
