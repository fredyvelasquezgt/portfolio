/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export function Contact() {
  const sendEmail = () => {
    alert('Enviado!');
  };

  return (

    <div className="con2" id="contact">
      <form className="form">
        <div className="pageTitle title">
          <h2>
            ¿Hola?
          </h2>
        </div>
        <div className="secondaryTitle title">¡Quiero saber de ti!</div>
        <input type="text" className="name formEntry" placeholder="Nombre" />
        <input type="text" className="email formEntry" placeholder="Email" />
        <textarea className="message formEntry" placeholder="Mensaje"></textarea>
        <button type="button" className="submit formEntry" onClick={sendEmail}>Enviar</button>
      </form>
    </div>

  );
}

export default Contact;
