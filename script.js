let listaHexaCor = [];
let corPrincipal;
let corSecundaria;
let espacamento;


function trocarTudo() {
    listaHexaCor = combinacoHexa();
    corPrincipal = sortearCorPrincipal();
    corSecundaria = escolherCorSecundaria();
    trocarTexto(corPrincipal, corSecundaria);
    gerarPaleta();

}

function sortearCorPrincipal() {

    let indiceHexaCor = Math.floor(Math.random() * listaHexaCor.length);

    let cor = listaHexaCor[indiceHexaCor];

    console.log(`${cor} - reteorno da sortearCor - Indice: ${indiceHexaCor}`);
    return cor;
}

function combinacoHexa() {
    let listaHexa = [];
    espacamento = parseInt(document.getElementById('espacamento').value); //24 foi o que achei melhor

    for (let red = 0; red < 256;) {
        for (let green = 0; green < 256;) {
            for (let blue = 0; blue < 256;) {
                const hexRed = red.toString(16).padStart(2, '0');
                const hexGreen = green.toString(16).padStart(2, '0');
                const hexBlue = blue.toString(16).padStart(2, '0');

                const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

                listaHexa.push(hexColor);

                blue += espacamento / 2;
            }
            green += espacamento * 2;
        }
        red += espacamento;
    }

    listaHexa = listaHexa.sort();
    console.log(`${listaHexa.length} - reteorno da combinacoHexa`);

    return listaHexa;
}

function escolherCorSecundaria() {
    let indiceCor;
    let indiceCorSecundaria;
    let tamanho = parseInt((listaHexaCor.length) / 2);

    let encontrouCor = false;
    for (let i = 0; i < listaHexaCor.length; i++) {
        if (listaHexaCor[i] === corPrincipal) {
            indiceCor = i;
            //console.log("Cor encontrada na posição:", i);
            encontrouCor = true;
            break;
        }
    }
    if (!encontrouCor) {
        console.log("Cor não encontrada na lista.");
    }

    if (indiceCor < tamanho) {
        indiceCorSecundaria = indiceCor + tamanho;
        corSecundariaEscolhida = listaHexaCor[indiceCorSecundaria];
    } else if (indiceCor > tamanho) {
        indiceCorSecundaria = indiceCor - tamanho;
        corSecundariaEscolhida = listaHexaCor[indiceCorSecundaria];
    }

    console.log(`${corSecundariaEscolhida} - reteorno da escolherCorSecundaria - Indice: ${indiceCorSecundaria}`);
    return corSecundariaEscolhida;

}

function trocarTexto(corPrincipal, corSecundaria) {
    const fundo = document.getElementById('fundo');
    const texto = document.getElementById('texto');

    fundo.style.backgroundColor = corPrincipal;
    texto.style.color = corSecundaria;
}

function gerarPaleta() {
    const paletaDiv = document.getElementById('paleta');
    paletaDiv.innerHTML = '';

    if (espacamento < 24) {
        paletaDiv.innerHTML = 'Não é possível gerar a Paleta';

    } else {
        listaHexaCor.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.style.backgroundColor = color;
            colorDiv.style.width = '';
            colorDiv.style.height = '20px';
            colorDiv.style.border = '1px solid black';
            paletaDiv.appendChild(colorDiv);
        });

    }


}

//fim