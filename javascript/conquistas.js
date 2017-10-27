let unlockedEl = document.querySelector('#unlocked'),
  lockedEl = document.querySelector('#locked');

if(localStorage.getItem('conqJDV1'))
  unlockedEl.innerHTML += '<h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p>';

if(localStorage.getItem('conqJDV2'))
  unlockedEl.innerHTML += '<h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p>';

if(localStorage.getItem('conqJDV3'))
  unlockedEl.innerHTML += '<h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p>';
