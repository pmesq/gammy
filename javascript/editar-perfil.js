let editNomeEl = document.querySelector('#edit-nome'),
  editDescEl = document.querySelector('#edit-desc'),
  confirmEl = document.querySelector('#confirmar'),
  cancelEl = document.querySelector('#cancelar');

confirmEl.addEventListener('click', function() {
  localStorage.setItem('nome', editNomeEl.value);
  localStorage.setItem('desc', editDescEl.value);
});
