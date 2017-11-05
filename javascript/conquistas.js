let unlockedEl = document.querySelector('#unlocked'),
  lockedEl = document.querySelector('#locked');

// Conquistas do Jogo da Velha

if(JSON.parse(localStorage.getItem('conqJDV1')))
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p></div>';

if(JSON.parse(localStorage.getItem('conqJDV2')))
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p></div>';

if(JSON.parse(localStorage.getItem('conqJDV3')))
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p></div>';

// Conquistas do Alcap

if(JSON.parse(localStorage.getItem('conqALCAP1')))
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p></div>';

if(JSON.parse(localStorage.getItem('conqALCAP2')))
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Patrão</h3><p>Contratar seu primeiro agricultor</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Patrão</h3><p>Contratar seu primeiro agricultor</p></div>';

if(JSON.parse(localStorage.getItem('conqALCAP3')))
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacecapitalista</h3><p>Possuir 10000 AlfaceCoins</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacecapitalista</h3><p>Possuir 10000 AlfaceCoins</p></div>';

if(JSON.parse(localStorage.getItem('conqALCAP4')))
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p></div>';
