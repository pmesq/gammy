let b0El = document.querySelector('#b0'),
  alfacoinsEl = document.querySelector('#alfacoins'),
  aprimorarCliqueEl = document.querySelector('#aprimorar-clique'),
  alfacoins = 0,
  precoAprimorarClique = 100,
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

b0El.addEventListener('click', function() {
  alfacoins += valClique;
});

aprimorarCliqueEl.addEventListener('click', function() {
  if(alfacoins >= precoAprimorarClique) {
    alfacoins -= precoAprimorarClique;
    precoAprimorarClique *= 10;
    valClique *= 5;
  }
});

setInterval(function() {
  alfacoinsEl.innerHTML = alfacoins;
  localStorage.setItem('alfacoins', JSON.stringify(alfacoins));
  localStorage.setItem('precoAprimorarClique', JSON.stringify(precoAprimorarClique));
  localStorage.setItem('valClique', JSON.stringify(valClique));
}, 10);

b0El.addEventListener('click', function(){
  b0El.classList.toggle('saltitante');
});

aprimorarCliqueEl.addEventListener('click', function(){
  aprimorarCliqueEl.classList.toggle('saltitante');
});
