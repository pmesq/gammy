let editNomeEl = document.querySelector('#edit-nome'),
  confirmEl = document.querySelector('#confirmar'),
  cancelEl = document.querySelector('#cancelar');
editNomeEl.value = localStorage.getItem('nome');
confirmEl.addEventListener('click', function() {
  localStorage.setItem('nome', editNomeEl.value);
});
