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
  refreshbutton.setAttribute('id', 'refresh');
  refreshbutton.innerText = 'Refresh';
  row.appendChild(refreshbutton);

  const addscore = document.createElement('div');
  addscore.className = 'addscore';
  addscore.innerText = 'Add your score';

  column2.appendChild(addscore);

  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  const FN = document.createElement('input');
  FN.setAttribute('type', 'text');
  FN.setAttribute('name', 'Name');
  FN.setAttribute('placeholder', 'Your Name');

  form.appendChild(FN);

  const FS = document.createElement('input');
  FS.setAttribute('type', 'integer');
  FS.setAttribute('name', 'Score');
  FS.setAttribute('placeholder', 'Your Score');

  form.appendChild(FS);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerText = 'Submit';

  form.appendChild(submit);

  column2.appendChild(form);

  return box;
};

export default component;
