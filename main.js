const btn = document.querySelector('button');
const p = document.querySelector('p');
const figure = document.querySelector('figure > img');
let operacao = 0;

const gerarCorAleatoria = () => {
    const rgb = {
        r: Math.trunc(Math.random() * 256),
        g: Math.trunc(Math.random() * 256),
        b: Math.trunc(Math.random() * 256)
    }
    return rgb;
}

const gerarJogo = () =>{

    let numero_antigo;
    do{
        numero_antigo = operacao;
        operacao = Math.floor(Math.random() * 9);
        console.log(operacao);
    }while(numero_antigo === operacao);

    switch (operacao){
        case 0:
            return operacao;
        case 1:
            return operacao;
        case 2:
            return operacao;
        case 3:
            return operacao;
        case 4:
            return operacao;
        case 5:
            return operacao;
        case 6:
            return operacao;
        case 7:
            return operacao;
        case 8:
            return operacao;
    }

};

btn.addEventListener('click', () => {

    const novoJogo = gerarJogo();

    console.log('clicado!');
    console.log(novoJogo);
    const novaCor = gerarCorAleatoria();

    if (novoJogo === 0){
        console.log('passou 0');
        p.style.color = 'black';
        p.innerText = 'Rocket League';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
    }
    else if(novoJogo === 1){
        console.log('passou 1');
        p.style.color = 'black';
        p.innerText = 'PUBG';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;

    }
    else if(novoJogo === 2){
        console.log('passou 2');
        p.style.color = 'black';
        p.innerText = 'Ready or Not';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 3){
        console.log('passou 3');
        p.style.color = 'black';
        p.innerText = 'Counter-Strike 2';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 4){
        console.log('passou 4');
        p.style.color = 'black';
        p.innerText = 'Battlefield 1';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 5){
        console.log('passou 5');
        p.style.color = 'black';
        p.innerText = 'The Division 2';
        figure.style.border = `2x solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 6){
        console.log('passou 6');
        p.style.color = 'black';
        p.innerText = 'West Hunt';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 7){
        console.log('passou 7');
        p.style.color = 'black';
        p.innerText = 'Smite';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
        
    }
    else if(novoJogo === 8){
        console.log('passou 8');
        p.style.color = 'black';
        p.innerText = 'Alien Swarm';
        figure.style.border = `2px solid rgb(${novaCor.r},${novaCor.g},${novaCor.b})`;
    }
});
