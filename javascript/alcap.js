let b0El = document.querySelector('#b0'),
  alfacoinsEl = document.querySelector('#alfacoins'),
  aprimorarCliqueEl = document.querySelector('#aprimorar-clique'),
	contratarAgricultoresEl = document.querySelector('#contratar-agricultores'),
  alfacoins = 0,
  precoAprimorarClique = 50,
  valClique = 1,
	alfacoinsAutomaticasPS = 0,
	precoContratarAgricultores = 1000;

if(localStorage.getItem('alfacoins') == null)
  localStorage.setItem('alfacoins', '0');
else
  alfacoins = JSON.parse(localStorage.getItem('alfacoins'));

if(localStorage.getItem('valClique') == null)
  localStorage.setItem('valClique', '1');
else
  valClique = JSON.parse(localStorage.getItem('valClique'));

if(localStorage.getItem('precoAprimorarClique') == null)
  localStorage.setItem('precoAprimorarClique', '50');
else
  precoAprimorarClique = JSON.parse(localStorage.getItem('precoAprimorarClique'));

if(localStorage.getItem('alfacoinsAutomaticasPS') == null)
  localStorage.setItem('alfacoinsAutomaticasPS', '0');
else
  alfacoinsAutomaticasPS = JSON.parse(localStorage.getItem('alfacoinsAutomaticasPS'));

if(localStorage.getItem('precoContratarAgricultores') == null)
  localStorage.setItem('precoContratarAgricultores', '1000');
else
  precoContratarAgricultores = JSON.parse(localStorage.getItem('precoContratarAgricultores'));

b0El.addEventListener('click', function() {
  alfacoins += valClique;
	b0El.classList.toggle('saltitante');
});

aprimorarCliqueEl.addEventListener('click', function() {
  if(alfacoins >= precoAprimorarClique) {
    alfacoins -= precoAprimorarClique;
    precoAprimorarClique *= 3;
    valClique *= 2;
		aprimorarCliqueEl.classList.add('saltitante');
		setTimeout(function() {
			aprimorarCliqueEl.classList.remove('saltitante');
		}, 200);
  }
});

contratarAgricultoresEl.addEventListener('click', function() {
	if(alfacoins >= precoContratarAgricultores) {
		alfacoins -= precoContratarAgricultores;
		if(alfacoinsAutomaticasPS == 0)	
			alfacoinsAutomaticasPS += 1;
		else
			alfacoinsAutomaticasPS *= 3;
		precoContratarAgricultores *= 4;
		contratarAgricultoresEl.classList.add('saltitante');
		setTimeout(function() {
			contratarAgricultoresEl.classList.remove('saltitante');
		}, 200);
	}
});

setInterval(function() {
  alfacoinsEl.innerHTML = alfacoins;
  localStorage.setItem('alfacoins', JSON.stringify(alfacoins));
  localStorage.setItem('precoAprimorarClique', JSON.stringify(precoAprimorarClique));
  localStorage.setItem('valClique', JSON.stringify(valClique));
}, 10);

setInterval(function() {
	alfacoins += alfacoinsAutomaticasPS;
}, 1000);
