let tab = new Array(9),
  imgEl = document.querySelectorAll('img'),
  statusEl = document.querySelector('#status'),
  recomecarEl = document.querySelector('#recomecar'),
	notConqEl = document.querySelector('#notificacao-conquista'),
  vez = false,
  contJDV = 0,
  conquistas = 0,
  run = true;

for(let i = 0; i < 9; i++)
  tab[i] = -1;

if(localStorage.getItem('contJDV') == null)
  localStorage.setItem('contJDV', '0');
else
  contJDV = JSON.parse(localStorage.getItem('contJDV'));

if(localStorage.getItem('conquistas') == null)
  localStorage.setItem('conquistas', '0');
else
  conquistas = JSON.parse(localStorage.getItem('conquistas'));

imgEl.forEach(function(item, i) {
  item.addEventListener('mousedown', function() {
    if(tab[i] == -1 && run) {
      statusEl.innerHTML = vez ? 'Vez do jogador X' : 'Vez do jogador O';
      vez = !vez;
      tab[i] = vez;
      item.src = vez ? 'imgs/jdv-x.png' : 'imgs/jdv-o.png';
      if(resultado() == 1)
        statusEl.innerHTML = vez ? 'Vitória do jogador X!' : 'Vitória do jogador O!';
      else if(resultado() == -1)
        statusEl.innerHTML = 'Deu velha!';
      if(resultado() != 0) {
        contJDV += 1;
        localStorage.setItem('contJDV', JSON.stringify(contJDV));
        for(img of imgEl) 
          img.style.cursor = 'default';
        if(contJDV == 5) {
          conquistas += 1;
          localStorage.setItem('conqJDV1', 'true');
          localStorage.setItem('conquistas', JSON.stringify(conquistas));
          notificarConquista('Eu começo primeiro!');
        } else if(contJDV == 25) {
          conquistas += 1;
          localStorage.setItem('conqJDV2', 'true');
          localStorage.setItem('conquistas', JSON.stringify(conquistas));
          notificarConquista('XXX');
        } else if(contJDV == 100) {
          conquistas += 1;
          localStorage.setItem('conqJDV3', 'true');
          localStorage.setItem('conquistas', JSON.stringify(conquistas));
          notificarConquista('Jogo do Mestre');
        }
      }
    }
  });
});

function resultado() {
  run = false;
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 3; j++) {
      if(tab[3 * j] == i && tab[3 * j + 1] == i && tab[3 * j + 2] == i)
        return 1;
      else if(tab[j] == i && tab[j + 3] == i && tab[j + 6] == i)
        return 1;
    }
    for(let j = 2; j <= 4; j += 2)
      if(tab[4 - j] == i && tab[4] == i && tab[4 + j] == i)
        return 1;
  }
  for(let i = 0; i < 9; i++) {
    if(tab[i] == -1) {
      run = true;
      return 0;
    }
  }
  return -1;
};

recomecarEl.addEventListener('click', function() {
  
  for(let i = 0; i < 9; i++)
    tab[i] = -1;
  for(let img of imgEl) {
    img.style.cursor = 'pointer';
    img.src = 'imgs/jdv-branco.png';
  }
  vez = false;
  statusEl.innerHTML = 'Vez do jogador X';
  run = true;
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
