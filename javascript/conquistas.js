let unlockedEl = document.querySelector('#unlocked'),
  lockedEl = document.querySelector('#locked'),
  cdEl = document.querySelector('#cd'),
  cbEl = document.querySelector('#cb'),
  conquistasDesbloqueadas = 0;

//

if(localStorage.getItem('conqJDV1') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqJDV2') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqJDV3') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqALCAP1') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqALCAP2') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqALCAP3') == 'true') conquistasDesbloqueadas++;
if(localStorage.getItem('conqALCAP4') == 'true') conquistasDesbloqueadas++;
let conquistasBloqueadas = 7 - conquistasDesbloqueadas;
cdEl.innerHTML += conquistasDesbloqueadas + ')';
cbEl.innerHTML += conquistasBloqueadas + ')';


// Conquistas do Jogo da Velha

if(localStorage.getItem('conqJDV1') == 'true') 
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>Eu começo primeiro!</h3><p>Jogar Jogo da Velha 5 vezes.</p></div>';

if(localStorage.getItem('conqJDV2') == 'true') 
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>XXX</h3><p>Jogar Jogo da Velha 25 vezes.</p></div>';

if(localStorage.getItem('conqJDV3') == 'true') 
  unlockedEl.innerHTML += '<div class="conq jdv"><h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p></div>';
else
  lockedEl.innerHTML += '<div class="conq jdv"><h3>Jogo do Mestre</h3><p>Jogar Jogo da Velha 100 vezes.</p></div>';

// Conquistas do Alcap

if(localStorage.getItem('conqALCAP1') == 'true') 
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Você me achou!</h3><p>Achar a alface escondida no fundo</p></div>';

if(localStorage.getItem('conqALCAP2') == 'true') 
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Patrão</h3><p>Contratar seu primeiro agricultor</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Patrão</h3><p>Contratar seu primeiro agricultor</p></div>';

if(localStorage.getItem('conqALCAP3') == 'true') 
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacecapitalista</h3><p>Possuir 10000 AlfaceCoins</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacecapitalista</h3><p>Possuir 10000 AlfaceCoins</p></div>';

if(localStorage.getItem('conqALCAP4') == 'true') 
  unlockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p></div>';
else
  lockedEl.innerHTML += '<div class="conq alcap"><h3>Alfacilionário</h3><p>Possuir 1000000 de AlfaceCoins</p></div>';

