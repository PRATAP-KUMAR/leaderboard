import './style.css';
import data from './modules/data.js';

const component = () => {
  const box = document.createElement('div');
  box.className = 'box';

  const h2 = document.createElement('h2');
  h2.innerText = 'Leaderboard';

  box.appendChild(h2);

  const columnbox = document.createElement('div');
  columnbox.className = 'columnbox';

  box.appendChild(columnbox);

  const column1 = document.createElement('div');
  column1.className = 'column1';

  columnbox.appendChild(column1);

  const column2 = document.createElement('div');
  column2.className = 'column2';

  columnbox.appendChild(column2);

  const row = document.createElement('div');
  row.className = 'row';

  column1.appendChild(row);

  const container = document.createElement('div');
  container.className = 'container';

  column1.appendChild(container);

  const recentscore = document.createElement('div');
  recentscore.className = 'recentscore';
  recentscore.innerText = 'Recent Scores';

  row.appendChild(recentscore);

  const refreshbutton = document.createElement('button');
  refreshbutton.innerText = 'Refresh';
  row.appendChild(refreshbutton);

  const addscore = document.createElement('div');
  addscore.className = 'addscore';
  addscore.innerText = 'Add your score';

  column2.appendChild(addscore);

  const form1 = document.createElement('form');
  form1.className = 'form1';
  form1.setAttribute('method', 'post');

  const FN = document.createElement('input');
  FN.setAttribute('type', 'text');
  FN.setAttribute('name', 'Name');
  FN.setAttribute('placeholder', 'Your Name');

  form1.appendChild(FN);

  const form2 = document.createElement('form');
  form2.className = 'form2';
  form2.setAttribute('method', 'post');

  const FS = document.createElement('input');
  FS.setAttribute('type', 'text');
  FS.setAttribute('name', 'score');
  FS.setAttribute('placeholder', 'Your score');

  form2.appendChild(FS);

  const submit = document.createElement('button');
  submit.innerText = 'Submit';

  column2.appendChild(form1);
  column2.appendChild(form2);
  column2.appendChild(submit);

  data.forEach((item) => {
    const namescore = document.createElement('div');
    namescore.className = 'namescore';
    namescore.innerText = `${item.name}: ${item.score}`;
    container.appendChild(namescore);
  });

  return box;
};

document.body.appendChild(component());
