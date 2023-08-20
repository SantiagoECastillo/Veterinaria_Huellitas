import React from 'react';

function EnviarMail() {
  const emailAddress = 'vethuellitastuc@gmail.com';
  const subject = 'Consulta Veterinaria';
  const body = 'Hola, quería hacerles una consulta sobre...';

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoUrl}>Enviar Mail</a>
  );
}

export default EnviarMail;