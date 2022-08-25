const populateHeader = (obj) => {
  const cont = document.querySelector('.container');
  const array = obj.result;
  array.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'namescore';
    div.innerText = `${item.user}: ${item.score}`;
    cont.appendChild(div);
  });
};

const populate = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OtEq0DbjQONEuSxicuAl/scores';

  const response = await fetch(requestURL);
  const Obj = await response.json();

  populateHeader(Obj);
};

export default populate;
