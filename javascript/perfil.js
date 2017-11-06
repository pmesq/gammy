let divEditNomeEl = document.querySelector('#editar-nome'),
  nomeEl = document.querySelector('#p-nome'),
  descEl = document.querySelector('#p-desc'),
  conquistasEl = document.querySelector('#p-conquistas'),
  conquistas = 0;

if(localStorage.getItem('nome') == null)
  localStorage.setItem('nome', 'Você');
else
  nomeEl.innerHTML = localStorage.getItem('nome');

if(localStorage.getItem('desc') == null)
  localStorage.setItem('desc', 'Sua descrição');
else
  descEl.innerHTML = localStorage.getItem('desc');

if(localStorage.getItem('conquistas') == null)
  localStorage.setItem('conquistas', '0');
else
  conquistas = JSON.parse(localStorage.getItem('conquistas'));
conquistasEl.innerHTML = 'Conquistas: ' + conquistas + '/7';
