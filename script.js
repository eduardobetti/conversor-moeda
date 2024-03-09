const chk = document.getElementById('chk')
const valor = document.querySelector('.inputValor')
const botaoFalso = document.getElementById('botaoFalso')
const botaoReal = document.getElementById('botaoReal')
const botaoDolar = document.getElementById('botaoDolar')
const botaoEuro = document.getElementById('botaoEuro')
const botaoLibra = document.getElementById('botaoLibra')
const valueIn = document.getElementById('valueIn')
const valueOut = document.getElementById('valueOut')
const valorConverter = document.getElementById('valorConverter')
const valorConvertido = document.getElementById('valorConvertido')
const imgEntrada = document.getElementById('imgEntrada')
const imgSaida = document.getElementById('imgSaida')
const moedaEntrada = document.getElementById('moedaEntrada')
const moedaSaida = document.getElementById('moedaSaida')

// função tema escuro
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

//função botaoFalso
botaoFalso.addEventListener('click', function () {
  alert('selecione uma moeda no campo "Converter de"')
})

//seletores de entrada
function trocarMoedaEntrada() {

  if (valueIn.value == '0') {
    moedaEntrada.innerHTML = ''
    imgEntrada.src = ''
    imgEntrada.alt = ''
    valorConverter.textContent = ''
    botaoFalso.style.display = 'block'
    botaoReal.style.display = 'none'
    botaoDolar.style.display = 'none'
    botaoEuro.style.display = 'none'
    botaoLibra.style.display = 'none'
  }

  if (valueIn.value == 'real') {
    moedaEntrada.innerHTML = 'Real brasileiro'
    imgEntrada.src = './assets/bra.png'
    imgEntrada.alt = 'bandeira do Brasil'
    valorConverter.textContent = 'R$ 0,00'
    botaoFalso.style.display = 'none'
    botaoReal.style.display = 'block'
    botaoDolar.style.display = 'none'
    botaoEuro.style.display = 'none'
    botaoLibra.style.display = 'none'
  }

  if (valueIn.value == 'dolar') {
    moedaEntrada.innerHTML = 'Dolar americano'
    imgEntrada.src = './assets/usa.png'
    imgEntrada.alt = 'bandeira dos Estados Unidos da América'
    valorConverter.textContent = 'US$ 0,00'
    botaoFalso.style.display = 'none'
    botaoReal.style.display = 'none'
    botaoDolar.style.display = 'block'
    botaoEuro.style.display = 'none'
    botaoLibra.style.display = 'none'
  }

  if (valueIn.value == 'euro') {
    moedaEntrada.innerHTML = 'Euro'
    imgEntrada.src = './assets/euro.png'
    imgEntrada.alt = 'bandeira da União Europeia'
    valorConverter.textContent = '0,00 €'
    botaoFalso.style.display = 'none'
    botaoReal.style.display = 'none'
    botaoDolar.style.display = 'none'
    botaoEuro.style.display = 'block'
    botaoLibra.style.display = 'none'
  }

  if (valueIn.value == 'libra') {
    moedaEntrada.innerHTML = 'Libra esterlina'
    imgEntrada.src = './assets/libra.png'
    imgEntrada.alt = 'bandeira da Grã-Bretanha'
    valorConverter.textContent = '£ 0,00'
    botaoFalso.style.display = 'none'
    botaoReal.style.display = 'none'
    botaoDolar.style.display = 'none'
    botaoEuro.style.display = 'none'
    botaoLibra.style.display = 'block'
  }
}
valueIn.addEventListener('change', trocarMoedaEntrada)

//seletor de saída
function trocarMoedaSaida() {

  if (valueOut.value == '0') {
    moedaSaida.innerHTML = ''
    imgSaida.src = ''
    imgSaida.alt = ''
  }

  if (valueOut.value == 'real') {
    moedaSaida.innerHTML = 'Real brasileiro'
    imgSaida.src = './assets/bra.png'
    imgSaida.alt = 'bandeira do Brasil'
    valorConvertido.textContent = 'R$ 0,00'
  }

  if (valueOut.value == 'dolar') {
    moedaSaida.innerHTML = 'Dolar americano'
    imgSaida.src = './assets/usa.png'
    imgSaida.alt = 'bandeira dos Estados Unidos da América'
    valorConvertido.textContent = 'U$$ 0,00'
  }

  if (valueOut.value == 'euro') {
    moedaSaida.innerHTML = 'Euro'
    imgSaida.src = './assets/euro.png'
    imgSaida.alt = 'bandeira da União Europeia'
    valorConvertido.textContent = '0,00 €'
  }

  if (valueOut.value == 'libra') {
    moedaSaida.innerHTML = 'Libra esterlina'
    imgSaida.src = './assets/libra.png'
    imgSaida.alt = 'bandeira da Grã-Bretanha'
    valorConvertido.textContent = '£ 0,00'
  }
}
valueOut.addEventListener('change', trocarMoedaSaida)

//função converterReal
function converterReal() {

  if (valueOut.value == '0') {
    alert('selecione uma moeda no campo "Converter para"')
  };

  if (valor.value == '') {
    alert('digite um valor no campo "Digite o valor"')
  };

  if (valueIn.value == 'real', valueOut.value == 'real') {
    valorConverter.innerHTML = `R$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `R$ ${valor.value}`.replace('.', ',')
  };

  if (valueIn.value == 'real', valueOut.value == 'dolar') {
    valorConverter.innerHTML = `R$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `US$ ${valor.value / 4.9751}`.replace('.', ',')

  };

  if (valueIn.value == 'real', valueOut.value == 'euro') {
    valorConverter.innerHTML = `R$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `${valor.value / 5.4537} €`.replace('.', ',')
  };

  if (valueIn.value == 'real', valueOut.value == 'libra') {
    valorConverter.innerHTML = `R$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `£ ${valor.value / 6.401}`.replace('.', ',')
  };
}
botaoReal.addEventListener('click', converterReal);

//função converterDolar
function converterDolar() {

  if (valueOut.value == '0') {
    alert('selecione uma moeda no campo "Converter para"')
  };

  if (valor.value == '') {
    alert('digite um valor no campo "Digite o valor"')
  };

  if (valueIn.value == 'dolar', valueOut.value == 'real') {
    valorConverter.innerHTML = `US$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `R$ ${valor.value * 4.975}`.replace('.', ',')
  };

  if (valueIn.value == 'dolar', valueOut.value == 'dolar') {
    valorConverter.innerHTML = `US$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `US$ ${valor.value}`.replace('.', ',')
  };

  if (valueIn.value == 'dolar', valueOut.value == 'euro') {
    valorConverter.innerHTML = `US$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `${valor.value * 0.912} €`.replace('.', ',')
  };

  if (valueIn.value == 'dolar', valueOut.value == 'libra') {
    valorConverter.innerHTML = `US$ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `£ ${valor.value * 0.776}`.replace('.', ',')
  };
}
botaoDolar.addEventListener('click', converterDolar);

//função converterEuro
function converterEuro() {

  if (valueOut.value == '0') {
    alert('selecione uma moeda no campo "Converter para"')
  };

  if (valor.value == '') {
    alert('digite um valor no campo "Digite o valor"')
  };

  if (valueIn.value == 'euro', valueOut.value == 'real') {
    valorConverter.innerHTML = `${valor.value} €`.replace('.', ',')
    valorConvertido.innerHTML = `R$ ${valor.value * 5.4537}`.replace('.', ',')
  };

  if (valueIn.value == 'euro', valueOut.value == 'dolar') {
    valorConverter.innerHTML = `${valor.value} €`.replace('.', ',')
    valorConvertido.innerHTML = `US$ ${valor.value * 1.096}`.replace('.', ',')
  };

  if (valueIn.value == 'euro', valueOut.value == 'euro') {
    valorConverter.innerHTML = `${valor.value} €`.replace('.', ',')
    valorConvertido.innerHTML = `${valor.value} €`.replace('.', ',')
  };

  if (valueIn.value == 'euro', valueOut.value == 'libra') {
    valorConverter.innerHTML = `${valor.value} €`.replace('.', ',')
    valorConvertido.innerHTML = `£ ${valor.value * 0.850}`.replace('.', ',')
  };
}
botaoEuro.addEventListener('click', converterEuro);

//função converterLibra
function converterLibra() {

  if (valueOut.value == '0') {
    alert('selecione uma moeda no campo "Converter para"')
  };

  if (valor.value == '') {
    alert('digite um valor no campo "Digite o valor"')
  };

  if (valueIn.value == 'libra', valueOut.value == 'real') {
    valorConverter.innerHTML = `£ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `R$ ${valor.value * 6.4067}`.replace('.', ',')
  };

  if (valueIn.value == 'libra', valueOut.value == 'dolar') {
    valorConverter.innerHTML = `£ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `US$ ${valor.value * 1.2879}`.replace('.', ',')
  };

  if (valueIn.value == 'libra', valueOut.value == 'euro') {
    valorConverter.innerHTML = `£ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `${valor.value * 1.1749} €`.replace('.', ',')
  };

  if (valueIn.value == 'libra', valueOut.value == 'libra') {
    valorConverter.innerHTML = `£ ${valor.value}`.replace('.', ',')
    valorConvertido.innerHTML = `£ ${valor.value}`.replace('.', ',')
  };
}
botaoLibra.addEventListener('click', converterLibra);