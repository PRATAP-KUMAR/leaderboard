import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerText = 'Leaderboard';
  element.className = 'hello';

  return element;
}

document.body.appendChild(component());
