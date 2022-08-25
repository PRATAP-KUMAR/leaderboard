import './style.css';
import component from './modules/component.js';
import populate from './modules/populate.js';
import send from './modules/send.js';

document.body.appendChild(component());

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');

populate();

refresh.addEventListener('click', () => { window.location.reload(); populate(); });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements.Name.value;
  const Score = form.elements.Score.value;
  if (name !== '' && Score !== '') {
    const myObject = {
      user: name,
      score: Score,
    };
    send(myObject);
    form.elements.Name.value = '';
    form.elements.Score.value = '';
  }
});
