const lastCalc = document.getElementById('last-calc');
const resultado = document.getElementById('span');
const buttons = document.querySelectorAll('button');

let expressaoCompleta = '';
let resultadoFinal = false;

buttons.forEach((botao) => {
  botao.addEventListener('click', () => {
    const expressao = botao.dataset.valor || botao.textContent;

    // se for o botão C, limpa a expressão completa
    if (expressao === 'C') {
      expressaoCompleta = '';
      resultado.textContent = '0';
      resultadoFinal = false;
      return;
    }

    // se for o botao CE, remove o último caractere
    if (expressao === 'CE') {
      expressaoCompleta = expressaoCompleta.slice(0, -1);
      resultado.textContent = expressaoCompleta;
      return;
    }

    // se for o botao =, calcula o resultado
    if (expressao === '=') {
      try {
        const total = eval(expressaoCompleta);
        expressaoCompleta = total.toString();
        resultado.textContent = expressaoCompleta;
        resultadoFinal = true;
      } catch (error) {
        resultado.textContent = 'Erro';
      }
      return;
    }

    // se tiver acabado de mostrar resultado, limpa para uma nova conta.
    if (resultadoFinal) {
      expressaoCompleta = '';
      mostrarResultado = false;
    }

    // atualiza display e expressao;
    expressaoCompleta += expressao;
    resultado.textContent = expressaoCompleta;
  });
});
