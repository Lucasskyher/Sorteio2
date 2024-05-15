const btn = document.querySelector('button');
const p = document.querySelector('p');


const gerarJogo = () =>{
    const operacao = Math.floor(Math.random() * 6);
    let numero;


    switch (operacao){
        case 0:
            numero = 0;
            break;
        case 1:
            numero = 1;
            break;
        case 2:
            numero = 2;
            break;
        case 3:
            numero = 3;
            break;
        case 4:
            numero = 4;
            break;
        case 5:
            numero = 4;
            break;
    }


    return numero;
   
};


btn.addEventListener('click', () => {

    const novoJogo = gerarJogo();

    console.log('clicado!');
    console.log(novoJogo);

    if (novoJogo === 0){
        console.log('passou 0');
        p.innerText = 'Rocket League';
    }
    else if(novoJogo === 1){
        console.log('passou 1');
        p.innerText = 'PUBG';

    }
    else if(novoJogo === 2){
        console.log('passou 2');
        p.innerText = 'Ready or Not';
        
    }
    else if(novoJogo === 3){
        console.log('passou 3');
        p.innerText = 'Counter-Strike 2';
        
    }
    else if(novoJogo === 4){
        console.log('passou 4');
        p.innerText = 'Battlefield 1';
        
    }
    else if(novoJogo === 5){
        console.log('passou 4');
        p.innerText = 'Battlefield 4';
        
    }




});