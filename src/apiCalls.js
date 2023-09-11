const getData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        throw new Error('Uh oh :(');
      }
    })
    .then(response => response.json());
};

export default getData;