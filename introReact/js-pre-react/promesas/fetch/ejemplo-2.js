// Enviar una solicitud POST con datos JSON:

// En este caso, se utiliza fetch para enviar una solicitud POST con datos JSON a un servidor y manejar la respuesta.

const url = 'https://jsonplaceholder.typicode.com/posts';

const datos = {
  userId: 1,
  id: 101,
  title: 'Título del post',
  body: 'Contenido del post',
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos),
})
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
