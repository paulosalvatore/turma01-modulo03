let vidaPorPersonagem = {
    'globin': 8,
    'orc': 12,
    'feiticeira': 18
}

let danoPorArma = {
    'soco': 2,
    'arco': 5,
    'espada': 10
}

let personagemSelecionado;
let armaSelecionada;

function iniciar() {
    var elementos = document.getElementsByClassName('elemento');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('calcular').addEventListener('click', calcularDano);
}

function marcarElementoSelecionado(evento) {
    const elementoSelecionado = evento.target.parentElement;
    const idElementoSelecionado = elementoSelecionado.getAttribute('id');
    
    if (elementoSelecionado.classList.contains('personagem')) {
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados('personagem');
    } else {
        armaSelecionada = idElementoSelecionado;
        limparElementosSelecionados('arma');
    }
    
    elementoSelecionado.classList.add('selecionado');
}

function calcularDano() {
    if (!personagemSelecionado || !armaSelecionada) {
        alert('Selecione o personagem e a arma para calcular o dano');
        return;
    }

    let danoDados = rolarOsDados();
    let danoArma = danoPorArma[armaSelecionada];
    let danoTotal = danoDados + danoArma;
    let vidaPersonagem = vidaPorPersonagem[personagemSelecionado];

    let resultado = 'Dano: ' + danoTotal + '!';
    if (danoTotal >= vidaPersonagem) {
        resultado += ' Parabéns você matou ' + personagemSelecionado;
    } else {
        resultado += ' Putz, não foi dessa vez, tente novamente!'
    }

    document.getElementById('dano').innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    var elementos = document.getElementsByClassName('elemento');
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].classList.contains(tipo)) {
            elementos[i].classList.remove('selecionado');
        }
    }
}

function rolarOsDados() {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }