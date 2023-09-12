// La función fetch en JavaScript se utiliza para realizar solicitudes de red y recuperar recursos de una URL. Aquí tienes tres ejemplos de cómo puedes usar fetch en diferentes situaciones:

// Realizar una solicitud GET y manejar la respuesta:

// Este ejemplo utiliza fetch para realizar una solicitud GET a una API y manejar la respuesta JSON que se recibe.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
