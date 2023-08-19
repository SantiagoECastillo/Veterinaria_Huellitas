import "./about.css";

function About() {
  return (
    <>
      <div>
        <h2 className="text-center my-4">Quienes somos?</h2>
      </div>

      {/* Contenedor 1 */}
      <div className="container fach text-center p-5">
        <p>
          En Huellitas, comprendemos que tus mascotas son parte de tu familia.
          Nuestro compromiso es proporcionarles el mejor cuidado veterinario en
          un ambiente cálido y acogedor. Con años de experiencia en la atención
          de animales de compañía, nuestro equipo de veterinarios altamente
          capacitados se dedica a mantener a tus amigos peludos felices y
          saludables en cada etapa de sus vidas.
        </p>
        <p>
          Ofrecemos una amplia gama de servicios veterinarios diseñados para
          satisfacer todas las necesidades de tus mascotas. Desde chequeos de
          rutina, vacunación y desparasitación, hasta cirugías especializadas y
          cuidados intensivos, estamos preparados para brindar la atención
          médica que tus animales merecen. Ya sea que tengas un cachorro
          juguetón, un gato curioso o una mascota mayor que necesita cuidados
          especiales, estamos aquí para ayudar.
        </p>
        <p>
          Nuestro equipo está formado por apasionados amantes de los animales
          que se esfuerzan por establecer conexiones duraderas con nuestros
          pacientes y sus dueños. Entendemos que cada mascota es única, y
          trabajamos en colaboración contigo para desarrollar planes de atención
          personalizados que se adapten a las necesidades individuales de tu
          compañero peludo.
        </p>
      </div>

      <div className="container my-5">
        <hr />
      </div>
      {/* Fin de Contenedor 1 */}

      {/* Contenedor 2 */}
      <div className="container d-flex flex-wrap justify-content-center">
        <div className="d-flex mx-4 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/pablo.jpg"
              alt="esteban"
              className="fotoCircle mx-5 mt-4"
            />
            <h4 className="text-center mt-4">Pablo Decima</h4>
            <p className="text-center">
            Médico veterinario
           </p>
          </div>
        </div>

        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/danields.jpg"
              alt="esteban"
              className="fotoCircle mx-5 mt-4"
            />
            <h3 className="text-center mt-4"><b>Daniel Spiner</b></h3>
            <p className="text-center">
            Médico veterinario 
           </p>
          </div>
        </div>

        <div className="d-flex mx-4 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            <img
              src="/src/images/integrantes/Estebanp.jpg"
              alt="esteban"
              className="fotoCircle mx-5 mt-4"
            />
            <h4 className="text-center mt-4">Esteban</h4>
            <p className="text-center">
            Médico veterinario
           </p>
          </div>
        </div>
      </div>
           

      <div className="container d-flex flex-wrap justify-content-center">
        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            asdasd
          </div>
        </div>

        <div className="d-flex mx-5 my-4">
          <div
            className="card fach cambiocolor"
            style={{ width: "20rem", height: "23rem" }}
          >
            asdasd
          </div>
        </div>
      </div>

      {/* Fin de Contenedor 2 */}
    </>
  );
}

export default About;
