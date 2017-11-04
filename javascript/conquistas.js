let unlockedEl = document.querySelector('#unlocked'),
  lockedEl = document.querySelector('#locked');

// Conquistas do Jogo da Velha

if(JSON.parse(localStorage.getItem('conqJDV1')))
  unlockedEl.innerHTML += '<h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p>';

if(JSON.parse(localStorage.getItem('conqJDV2')))
  unlockedEl.innerHTML += '<h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p>';

if(JSON.parse(localStorage.getItem('conqJDV3')))
  unlockedEl.innerHTML += '<h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p>';
else
  lockedEl.innerHTML += '<h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p>';

// Conquistas do Alcap

if(JSON.parse(localStorage.getItem('conqALCAP1')))
  unlockedEl.innerHTML += '<h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p>';
else
  lockedEl.innerHTML += '<h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p>';

if(JSON.parse(localStorage.getItem('conqALCAP2')))
  unlockedEl.innerHTML += '<h3>Patrão</h3><p>Contratar seu primeiro agricultor</p>';
else
  lockedEl.innerHTML += '<h3>Patrão</h3><p>Contratar seu primeiro agricultor</p>';

if(JSON.parse(localStorage.getItem('conqALCAP3')))
  unlockedEl.innerHTML += '<h3>Big Plantation</h3><p>Possuir 10000 AlfaceCoins</p>';
else
  lockedEl.innerHTML += '<h3>Big Plantation</h3><p>Possuir 10000 AlfaceCoins</p>';

if(JSON.parse(localStorage.getItem('conqALCAP4')))
  unlockedEl.innerHTML += '<h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p>';
else
  lockedEl.innerHTML += '<h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p>';
