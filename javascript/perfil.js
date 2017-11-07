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

if(localStorage.getItem('conqJDV1') == 'true') conquistas++;
if(localStorage.getItem('conqJDV2') == 'true') conquistas++;
if(localStorage.getItem('conqJDV3') == 'true') conquistas++;
if(localStorage.getItem('conqALCAP1') == 'true') conquistas++;
if(localStorage.getItem('conqALCAP2') == 'true') conquistas++;
if(localStorage.getItem('conqALCAP3') == 'true') conquistas++;
if(localStorage.getItem('conqALCAP4') == 'true') conquistas++;
conquistasEl.innerHTML = 'Conquistas: ' + conquistas + '/7';
