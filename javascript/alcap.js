let b0El = document.querySelector('#b0'),
  alfacoinsEl = document.querySelector('#alfacoins'),
  aprimorarCliqueEl = document.querySelector('#aprimorar-clique'),
  precoAprimorarCliqueEl = document.querySelector('#preco-aprimorar-clique'),
  audioEl = document.querySelector('#audio'),
  audioCoinEl = document.querySelector('#audio-coin'),
  alfacoins = 0,
  precoAprimorarClique = 100,
  audio = true,
  valClique = 1;

if(localStorage.getItem('alfacoins') == null)
  localStorage.setItem('alfacoins', '0');
else
  alfacoins = JSON.parse(localStorage.getItem('alfacoins'));

if(localStorage.getItem('valClique') == null)
  localStorage.setItem('valClique', '1');
else
  valClique = JSON.parse(localStorage.getItem('valClique'));

if(localStorage.getItem('precoAprimorarClique') == null)
  localStorage.setItem('precoAprimorarClique', '100');
else
  precoAprimorarClique = JSON.parse(localStorage.getItem('precoAprimorarClique'));
precoAprimorarCliqueEl.innerHTML = precoAprimorarClique;

if(localStorage.getItem('audio') == null)
  localStorage.setItem('audio', 'true');
else
  audio = JSON.parse(localStorage.getItem('audio'));

audioEl.addEventListener('click', function() {
  audio = !audio;
  localStorage.setItem('audio', JSON.stringify(audio));
});

b0El.addEventListener('click', function() {
  alfacoins += valClique;
  if(audio) audioCoinEl.play();
});

aprimorarCliqueEl.addEventListener('click', function() {
  if(alfacoins >= precoAprimorarClique) {
    alfacoins -= precoAprimorarClique;
    precoAprimorarClique *= 10;
    precoAprimorarCliqueEl.innerHTML = precoAprimorarClique;
    valClique *= 5;
  }
});

setInterval(function() {
  alfacoinsEl.innerHTML = alfacoins;
  localStorage.setItem('alfacoins', JSON.stringify(alfacoins));
  localStorage.setItem('precoAprimorarClique', JSON.stringify(precoAprimorarClique));
  localStorage.setItem('valClique', JSON.stringify(valClique));
}, 10);
