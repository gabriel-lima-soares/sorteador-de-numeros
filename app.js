function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    if (doNumero>=ateNumero){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if(quantidadeDeNumeros>(ateNumero-doNumero+1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;
    for (let i = 0; i <quantidadeDeNumeros; i++){
        numero = obterNumerosAleatorios(doNumero, ateNumero);
        
        while (sorteados.includes(numero)){
            numero = obterNumerosAleatorios(doNumero, ateNumero);
           }

        sorteados.push(numero);
    }
    //alert(sorteados.sort());
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarStatusBotao();
}