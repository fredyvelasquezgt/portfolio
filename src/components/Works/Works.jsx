/* eslint-disable max-len */
import React from 'react';

export function Works() {
  return (
    <main className="wrapper">
      <section className="hero" id="home">
        <h1>Hola, soy Fredy</h1>

        <article>
          <p><b>Gracias por visitar mi portafolio</b></p>
          <a href="#skills">Comencemos!</a>
        </article>
      </section>

      <h2>Sobre mi</h2>
      <h4>Soy Fredy Velasquez, estudiante de ciencias de la computacion en universidad del Valle. Soy un apasionado de la tecnologia, la lectura y el futbol. Desde 2017 me interese bastante por la tecnologia, esta pasion fue la que me ayudo a decidir sobre la carrera que queria seguir. Disfruto bastante el area de UI/UX porque siento cercania con los usuarios pero tambien me gusta trabajar en la parte logica de las apps!</h4>

      <section className="hero">
        <h1>Skills</h1>
      </section>

      <section className="breweries" id="skills">

        <ul>
          <li>
            <figure>
              <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" alt="Several hands holding beer glasses" />
              <figcaption><h3>React</h3></figcaption>
            </figure>
            <p>
              Tecnologia utilizada para crear aplicaciones web
            </p>
          </li>
          <li>
            <figure>
              <img src="https://www.jairogarciarincon.com/img/clases/1325.jpg" alt="Several friends doing a toast" />
              <figcaption><h3>Java</h3></figcaption>
            </figure>
            <p>
              Tecnologia utilizada para desarrollo del backend de aplicaciones mas complejas
            </p>
          </li>
          <li>
            <figure>
              <img src="https://programacion.net/files/article/20160721020723_python-logo.png" alt="Three different glasses of beer" />
              <figcaption><h3>Python</h3></figcaption>
            </figure>
            <p>
              Tecnologia utilizada para analisis matematico, logica de aplicaciones web y manejo de bases de datos
            </p>
          </li>
        </ul>
      </section>

      <section className="hero">
        <h1>Proyectos</h1>
      </section>

      <section className="breweries" id="proyectos" data-testid="progress-text">

        <ul>
          <li>
            <figure>
              <img src="https://previews.123rf.com/images/sergeostroverhoff/sergeostroverhoff1605/sergeostroverhoff160500008/56027546-codificaci%C3%B3n-de-plantilla-y-el-tema-de-programaci%C3%B3n-n%C3%BAmeros-verdes-cian-filas-.jpg" alt="Several hands holding beer glasses" />
              <figcaption><h3>Calculadora</h3></figcaption>
            </figure>
            <p>
              Aplicacion web que realiza operaciones aritmeticas simples de forma intuitiva y rapida
            </p>
            <a href="http://stw-uvg-22.site/lab10/FAVF201011/" target="_blank" rel="noreferrer">Ver!</a>
          </li>
          <li>
            <figure>
              <img src="https://cerebriti.b-cdn.net/uploads/d6db07ed4aeb1e733ae8a2394b309d0c.jpg" alt="Several friends doing a toast" />
              <figcaption><h3>Buscador de gifs</h3></figcaption>
            </figure>
            <p>
              Aplicacion web que funciona como buscador de gifs de todo tipo. Se encuentra desplegada en github pages
            </p>
            <a href="https://fredyvelasquezgt.github.io/react-gifexpertapp/" target="_blank" rel="noreferrer">Ver!</a>
          </li>
          <li>
            <figure>
              <img src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg" alt="Three different glasses of beer" />
              <figcaption><h3>Ecommerce</h3></figcaption>
            </figure>
            <p>
              Proyecto web grupal, se integraron distintos modulos para el correcto funcionamiento.
            </p>
            <a href="http://ec2-54-175-28-151.compute-1.amazonaws.com:3000/" target="_blank" rel="noreferrer">Ver!</a>
          </li>
        </ul>

      </section>
    </main>
  );
}

export default Works;
