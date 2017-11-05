let plantarEl = document.querySelector('#plantar'),
	valCliqueEl = document.querySelector('#plantar > span'),
  alfacoinsEl = document.querySelector('#alfacoins > span'),
	alfacoinsPSEl = document.querySelector('#alfacoinsPS > span'),
  aprimorarCliqueEl = document.querySelector('#aprimorar-clique'),
	precoAprimorarCliqueEl = document.querySelector('#aprimorar-clique > span'),
	contratarAgricultoresEl = document.querySelector('#contratar-agricultores'),
	precoContratarAgricultoresEl = document.querySelector('#contratar-agricultores > span'),
	imgEl = document.querySelector('img'),
	notConqEl = document.querySelector('#notificacao-conquista');
  alfacoins = 0,
  precoAprimorarClique = 50,
  valClique = 1,
	alfacoinsAutomaticasPS = 0,
	precoContratarAgricultores = 1000
	conquistas = 0;

//

if(localStorage.getItem('alfacoins') == null)
  localStorage.setItem('alfacoins', '0');
else
  alfacoins = JSON.parse(localStorage.getItem('alfacoins'));

if(localStorage.getItem('valClique') == null)
  localStorage.setItem('valClique', '1');
else
  valClique = JSON.parse(localStorage.getItem('valClique'));
valCliqueEl.innerHTML = valClique;

if(localStorage.getItem('precoAprimorarClique') == null)
  localStorage.setItem('precoAprimorarClique', '50');
else
  precoAprimorarClique = JSON.parse(localStorage.getItem('precoAprimorarClique'));
precoAprimorarCliqueEl.innerHTML = precoAprimorarClique;

if(localStorage.getItem('alfacoinsAutomaticasPS') == null)
  localStorage.setItem('alfacoinsAutomaticasPS', '0');
else
  alfacoinsAutomaticasPS = JSON.parse(localStorage.getItem('alfacoinsAutomaticasPS'));

if(localStorage.getItem('precoContratarAgricultores') == null)
  localStorage.setItem('precoContratarAgricultores', '1000');
else
  precoContratarAgricultores = JSON.parse(localStorage.getItem('precoContratarAgricultores'));
precoContratarAgricultoresEl.innerHTML = precoContratarAgricultores;

if(localStorage.getItem('conquistas') == null)
  localStorage.setItem('conquistas', '0');
else
  conquistas = JSON.parse(localStorage.getItem('conquistas'));

if(localStorage.getItem('conqALCAP1') == 'true') {
	imgEl.src = '';
}

//

plantarEl.addEventListener('click', function() {
  alfacoins += valClique;
	plantarEl.classList.toggle('saltitante');
});

aprimorarCliqueEl.addEventListener('click', function() {
  if(alfacoins >= precoAprimorarClique) {
    alfacoins -= precoAprimorarClique;
    precoAprimorarClique *= 3;
		precoAprimorarCliqueEl.innerHTML = precoAprimorarClique;
    valClique *= 2;
		valCliqueEl.innerHTML = valClique;
		aprimorarCliqueEl.classList.add('saltitante');
		setTimeout(function() {
			aprimorarCliqueEl.classList.remove('saltitante');
		}, 200);
  }
});

contratarAgricultoresEl.addEventListener('click', function() {
  if(alfacoins >= precoContratarAgricultores) {
    alfacoins -= precoContratarAgricultores;
    if(alfacoinsAutomaticasPS == 0)	{
      alfacoinsAutomaticasPS += 1;
      conquistas += 1;
      localStorage.setItem('conqALCAP2', 'true');
      localStorage.setItem('conquistas', JSON.stringify(conquistas));
      notificarConquista('Patrão');
    }
    else 
      alfacoinsAutomaticasPS *= 3;
    precoContratarAgricultores *= 4;
    precoContratarAgricultoresEl.innerHTML = precoContratarAgricultores;
    contratarAgricultoresEl.classList.add('saltitante');
    setTimeout(function() {
      contratarAgricultoresEl.classList.remove('saltitante');
    }, 200);
    }
});

imgEl.addEventListener('click', function() {
  imgEl.src = '';
  conquistas += 1;
  localStorage.setItem('conqALCAP1', 'true');
  localStorage.setItem('conquistas', JSON.stringify(conquistas));
  notificarConquista('Você me achou');	
});

function notificarConquista(nomeConquista) {
  notConqEl.innerHTML = '<p>Nova conquista desbloqueada!<br>' + nomeConquista + '</p>';
  notConqEl.style.padding = '10px';
  notConqEl.style.borderWidth = '1px';
  setTimeout(function() {
    notConqEl.style.padding = '0';
    notConqEl.style.borderWidth = '0';
    notConqEl.innerHTML = '';
  }, 5000);
}

setInterval(function() {
  alfacoinsEl.innerHTML = alfacoins;
  alfacoinsPSEl.innerHTML = alfacoinsAutomaticasPS;
  localStorage.setItem('alfacoins', JSON.stringify(alfacoins));
  localStorage.setItem('precoAprimorarClique', JSON.stringify(precoAprimorarClique));
  localStorage.setItem('valClique', JSON.stringify(valClique));
  localStorage.setItem('precoContratarAgricultores', JSON.stringify(precoContratarAgricultores));
  localStorage.setItem('alfacoinsAutomaticasPS', JSON.stringify(alfacoinsAutomaticasPS));
  if(alfacoins >= 10000) {
    conquistas += 1;
    localStorage.setItem('conqALCAP3', 'true');
    localStorage.setItem('conquistas', JSON.stringify(conquistas));
    notificarConquista('Alfacecapitalista');	
  }
  if(alfacoins >= 1000000) {
    conquistas += 1;
    localStorage.setItem('conqALCAP4', 'true');
    localStorage.setItem('conquistas', JSON.stringify(conquistas));
    notificarConquista('Alfacilionário');
  }
}, 10);

setInterval(function() {
  alfacoins += alfacoinsAutomaticasPS;
}, 1000);
