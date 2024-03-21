const chk = document.getElementById('chk')
const valor = document.querySelector('.inputValor')
const botaoConverter = document.getElementById('botaoConverter')
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
  if (document.body.classList.toggle('dark')) {
    valueIn.style.boxShadow = '4px 4px 4px #00BF63'
    valueOut.style.boxShadow = '4px 4px 4px #00BF63'
    valor.style.boxShadow = '4px 4px 4px #00BF63'
  } else {
    valueIn.style.boxShadow = '4px 4px 4px #444444'
    valueOut.style.boxShadow = '4px 4px 4px #444444'
    valor.style.boxShadow = '4px 4px 4px #444444'
  }
})

//seletores de entrada
function trocarMoedaEntrada() {

  if (valueIn.value == '0') {
    moedaEntrada.innerHTML = '--'
    imgEntrada.src = '--'
    imgEntrada.alt = ''
    valorConverter.textContent = '--'
    if (valueOut.value == 'real') {
      valorConvertido.textContent = 'R$ 0,00'
    }
    if (valueOut.value == 'dolar') {
      valorConvertido.textContent = 'US$ 0.00'
    }
    if (valueOut.value == 'euro') {
      valorConvertido.textContent = '0,00 €'
    }
    if (valueOut.value == 'libra') {
      valorConvertido.textContent = '£ 0,00'
    }
  }

  if (valueIn.value == 'real') {
    moedaEntrada.innerHTML = 'Real brasileiro'
    imgEntrada.src = './assets/bra.png'
    imgEntrada.alt = 'bandeira do Brasil'
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (valueOut.value == 'real') {
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
    if (valueOut.value == 'dolar') {
      valorConvertido.innerHTML = `${(valor.value / 4.9751).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }
    if (valueOut.value == 'euro') {
      valorConvertido.innerHTML = `${(valor.value / 5.4537).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    }
    if (valueOut.value == 'libra') {
      valorConvertido.innerHTML = `${(valor.value / 6.401).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    }
  }

  if (valueIn.value == 'dolar') {
    moedaEntrada.innerHTML = 'Dólar americano'
    imgEntrada.src = './assets/usa.png'
    imgEntrada.alt = 'bandeira dos Estados Unidos da América'
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    if (valueOut.value == 'real')
      valorConvertido.innerHTML = `${(valor.value * 4.975).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (valueOut.value == 'dolar')
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    if (valueOut.value == 'euro')
      valorConvertido.innerHTML = `${(valor.value * 0.912).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    if (valueOut.value == 'libra')
      valorConvertido.innerHTML = `${(valor.value * 0.776).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  }

  if (valueIn.value == 'euro') {
    moedaEntrada.innerHTML = 'Euro'
    imgEntrada.src = './assets/euro.png'
    imgEntrada.alt = 'bandeira da União Europeia'
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    if (valueOut.value == 'real')
      valorConvertido.innerHTML = `${(valor.value * 5.4537).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (valueOut.value == 'dolar')
      valorConvertido.innerHTML = `${(valor.value * 1.096).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    if (valueOut.value == 'euro')
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    if (valueOut.value == 'libra')
      valorConvertido.innerHTML = `${(valor.value * 0.850).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  }

  if (valueIn.value == 'libra') {
    moedaEntrada.innerHTML = 'Libra esterlina'
    imgEntrada.src = './assets/libra.png'
    imgEntrada.alt = 'bandeira da Grã-Bretanha'
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    if (valueOut.value == 'real')
      valorConvertido.innerHTML = `${(valor.value * 6.4067).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (valueOut.value == 'dolar')
      valorConvertido.innerHTML = `${(valor.value * 1.2879).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    if (valueOut.value == 'euro')
      valorConvertido.innerHTML = `${(valor.value * 1.1749).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    if (valueOut.value == 'libra')
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  }
}
valueIn.addEventListener('change', trocarMoedaEntrada)

//seletores de saída
function trocarMoedaSaida() {

  if (valueOut.value == '0') {
    moedaSaida.innerHTML = '--'
    imgSaida.src = '--'
    imgSaida.alt = ''
    valorConvertido.textContent = '--'
  }

  if (valueOut.value == 'real') {
    moedaSaida.innerHTML = 'Real brasileiro'
    imgSaida.src = './assets/bra.png'
    imgSaida.alt = 'bandeira do Brasil'
    valorConvertido.textContent = 'R$ 0,00'
    if (valueIn.value == 'real') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
    if (valueIn.value == 'dolar') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      valorConvertido.innerHTML = `${(valor.value * 4.975).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
    if (valueIn.value == 'euro') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
      valorConvertido.innerHTML = `${(valor.value * 5.4537).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
    if (valueIn.value == 'libra') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
      valorConvertido.innerHTML = `${(valor.value * 6.4067).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
  }

  if (valueOut.value == 'dolar') {
    moedaSaida.innerHTML = 'Dólar americano'
    imgSaida.src = './assets/usa.png'
    imgSaida.alt = 'bandeira dos Estados Unidos da América'
    valorConvertido.textContent = 'U$$ 0.00'
    if (valueIn.value == 'real') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
      valorConvertido.innerHTML = `${(valor.value / 4.9751).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }
    if (valueIn.value == 'dolar') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }
    if (valueIn.value == 'euro') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
      valorConvertido.innerHTML = `${(valor.value * 1.096).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }
    if (valueIn.value == 'libra') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
      valorConvertido.innerHTML = `${(valor.value * 1.2879).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }
  }

  if (valueOut.value == 'euro') {
    moedaSaida.innerHTML = 'Euro'
    imgSaida.src = './assets/euro.png'
    imgSaida.alt = 'bandeira da União Europeia'
    valorConvertido.textContent = '0,00 €'
    if (valueIn.value == 'real') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
      valorConvertido.innerHTML = `${(valor.value / 5.4537).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    }
    if (valueIn.value == 'dolar') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      valorConvertido.innerHTML = `${(valor.value * 0.912).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    }
    if (valueIn.value == 'euro') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    }
    if (valueIn.value == 'libra') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
      valorConvertido.innerHTML = `${(valor.value * 1.1749).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    }
  }

  if (valueOut.value == 'libra') {
    moedaSaida.innerHTML = 'Libra esterlina'
    imgSaida.src = './assets/libra.png'
    imgSaida.alt = 'bandeira da Grã-Bretanha'
    valorConvertido.textContent = '£ 0,00'
    if (valueIn.value == 'real') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
      valorConvertido.innerHTML = `${(valor.value / 6.401).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    }
    if (valueIn.value == 'dolar') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      valorConvertido.innerHTML = `${(valor.value * 0.776).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    }
    if (valueIn.value == 'euro') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
      valorConvertido.innerHTML = `${(valor.value * 0.850).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    }
    if (valueIn.value == 'libra') {
      valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
      valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    }
  }
}
valueOut.addEventListener('change', trocarMoedaSaida)

//função botão converter
function converter() {

  if (valueIn.value == '0') {
    alert('selecione uma moeda no campo "Converter de"')
  }

  if (valueOut.value == '0') {
    alert('selecione uma moeda no campo "Converter para"')
  };

  if (valor.value == '') {
    alert('digite um valor no campo "Digite o valor"')
  };

  if (valueIn.value == 'real' && valueOut.value == 'real') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  };

  if (valueIn.value == 'real' && valueOut.value == 'dolar') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorConvertido.innerHTML = `${(valor.value / 4.9751).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  };

  if (valueIn.value == 'real' && valueOut.value == 'euro') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorConvertido.innerHTML = `${(valor.value / 5.4537).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
  };

  if (valueIn.value == 'real' && valueOut.value == 'libra') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    valorConvertido.innerHTML = `${(valor.value / 6.401).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  };

  if (valueIn.value == 'dolar' && valueOut.value == 'real') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    valorConvertido.innerHTML = `${(valor.value * 4.975).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  };

  if (valueIn.value == 'dolar' && valueOut.value == 'dolar') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  };

  if (valueIn.value == 'dolar' && valueOut.value == 'euro') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    valorConvertido.innerHTML = `${(valor.value * 0.912).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
  };

  if (valueIn.value == 'dolar' && valueOut.value == 'libra') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    valorConvertido.innerHTML = `${(valor.value * 0.776).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  };

  if (valueIn.value == 'euro' && valueOut.value == 'real') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    valorConvertido.innerHTML = `${(valor.value * 5.4537).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  };

  if (valueIn.value == 'euro' && valueOut.value == 'dolar') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    valorConvertido.innerHTML = `${(valor.value * 1.096).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  };

  if (valueIn.value == 'euro' && valueOut.value == 'euro') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
  };

  if (valueIn.value == 'euro' && valueOut.value == 'libra') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
    valorConvertido.innerHTML = `${(valor.value * 0.850).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  };

  if (valueIn.value == 'libra' && valueOut.value == 'real') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    valorConvertido.innerHTML = `${(valor.value * 6.4067).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  };

  if (valueIn.value == 'libra' && valueOut.value == 'dolar') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    valorConvertido.innerHTML = `${(valor.value * 1.2879).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
  };

  if (valueIn.value == 'libra' && valueOut.value == 'euro') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    valorConvertido.innerHTML = `${(valor.value * 1.1749).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
  };

  if (valueIn.value == 'libra' && valueOut.value == 'libra') {
    valorConverter.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
    valorConvertido.innerHTML = `${(valor.value / 1).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
  };
}
botaoConverter.addEventListener('click', converter);