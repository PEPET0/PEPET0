let numeroSecreto =  8; 
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
 }

 exibirTextoNaTela('h1', 'jogo do número secreto');
 exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

function verificarChute(){ 
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById ('reiniciar').removeAttribute
            ("disabled");
    } else {
            if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limpaCampo();
                
            }
    
}
              
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
  
    



