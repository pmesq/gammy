let divEditNomeEl = document.querySelector('#editar-nome'),
  nomeEl = document.querySelector('#p-nome'),
  conquistasEl = document.querySelector('#p-conquistas'),
  numConquistas = 0;

if(localStorage.getItem('nome') == null)
  localStorage.setItem('nome', 'Você');
else
  nomeEl.innerHTML = localStorage.getItem('nome');
if(localStorage.getItem('conquistas') == null)
  localStorage.setItem('conquistas', '0');
else
  conquistas = localStorage.getItem('conquistas');
conquistasEl.innerHTML = 'Conquistas: ' + conquistas + '/3';
