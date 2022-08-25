const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OtEq0DbjQONEuSxicuAl/scores';

const send = async (obj) => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default send;
