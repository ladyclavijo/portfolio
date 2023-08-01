import "./about.css";
import React from "react";

const About = () => {

  return(
    <div className="about-me">

      <div className="container-section">
      <h2>About me</h2>
        <p><span>Hola, soy Lady</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia animi dolor temporibus vitae, nihil delectus ut maiores repellat consectetur perferendis maxime. Suscipit delectus quos reiciendis tempora laudantium quod. Incidunt.
        </p>

        <div className="fila">

          <div className="col">
          <h3>Datos Personales</h3>
          <ul>
            <li>
              <strong>Cumpleaños</strong>
              Agosto 10
            </li>
            <li>
              <strong>Whatsapp</strong>
              123456789
            </li>
            <li>
              <strong>Email</strong>
              layclavijo10@gmail.com
            </li>
            <li>
              <strong>Ubicación</strong>
              Buenos Aires, Argentina
            </li>
            <li>
              <strong>Cargo</strong>
              <span>Full Stack Developer</span>
            </li>
          </ul>
          </div>
          
        </div>
        </div>

        <div className="col">
          <h3>Intereses</h3>
          <div className="intereses-container">

            <div className="interes">
            <i className="fa-solid fa-dumbbell"></i>
            <span>GYM</span>
            </div>

            <div className="interes">
            <i className="fa-solid fa-camera"></i>
            <span>FOTOGRAFIA</span>
            </div>

            <div className="interes">
            <i className="fa-solid fa-gamepad"></i>
            <span>VIDEOJUEGOS</span>
            </div>

            <div className="interes">
            <i className="fa-solid fa-headphones"></i>
            <span>MUSICA</span>
            </div>

            <div className="interes">
            <i className="fa-solid fa-book-open"></i>
            <span>LIBROS</span>
            </div>

            <div className="interes">
            <i className="fa-solid fa-plane"></i>
            <span>VIAJES</span>
            </div>

            </div>
          </div>

          <button>
            Descargar CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>

        </div>
  )
};

export default About;