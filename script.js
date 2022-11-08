const addcard = document.getElementById('adicionarcard');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const conteudo = document.getElementById('conteudo');
const enviar2 = document.getElementById('enviar2');
const fechar = document.getElementById('fechar');
const fechar2 = document.getElementById('fechar2');
const fechar3 = document.getElementById('fechar3');

const titulo = document.getElementById('titulo');
const cor = document.getElementById('cor');
const confirmar = document.getElementById('confirmar');

const cards = document.querySelector('.cards');
const fazer = document.getElementById('afazeres');
const fazendo = document.getElementById('fazendo');
const feito = document.getElementById('feito');
const novo = document.getElementById('new');

addcard.addEventListener('click', () => {
    popup.style.display = 'block';
});

novo.addEventListener('click', () => {
    popup.style.display = 'none';
    popup2.style.display = 'block';
});

confirmar.addEventListener('click', () => {novoCard();});

fechar.addEventListener('click', () => {popup.style.display = 'none';});
fechar2.addEventListener('click', () => {popup2.style.display = 'none';});
fechar3.addEventListener('click', () => {popup3.style.display = 'none';});

// ---------------------------------------------------------------//

fazer.addEventListener('click', afazer);
let divAF = document.createElement('div');
fazendo.addEventListener('click', zfazendo)
let divFA = document.createElement('div');
feito.addEventListener('click', zfeito);
let divFE = document.createElement('div');

var x = 0;

function afazer() {
    if (divAF.classList.contains('afazer')) {
        alert('[ERRO] O Card A Fazeres já existe.');
    } else {
        divAF.classList.add('default');
        divAF.classList.add('afazer');
        cards.appendChild(divAF);

        let fecharAF = document.createElement('button');
        fecharAF.classList.add('fechar');
        fecharAF.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        fecharAF.addEventListener('click', () => {
            divAF.classList.remove('afazer');
            divAF.removeChild(divTextos);
            divAF.removeChild(fecharAF)
            divAF.removeChild(h2AF);
            divAF.removeChild(botaoAF);
            cards.removeChild(divAF);
        });
        divAF.appendChild(fecharAF);

        let h2AF = document.createElement('h2');
        h2AF.innerHTML = 'A Fazeres';
        divAF.appendChild(h2AF);

        let divTextos = document.createElement('div');
        divAF.appendChild(divTextos);

        let botaoAF = document.createElement('button');
        botaoAF.classList.add('addbtn');
        botaoAF.innerHTML = '+ Adicionar Lembrete';
        botaoAF.addEventListener('click', () => {
            popupAF();
        })
        divAF.appendChild(botaoAF);

        function popupAF() {
            x++;

            popup3.style.display = 'block';
            conteudo.value = "";

            let divTexto = document.createElement('div');
            divTexto.setAttribute('id', 'divTexto' + x);

            let p1 = document.createElement('p');
            p1.setAttribute('id', 'texto' + x);

            let deletebtn = document.createElement('button');
            deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deletebtn.classList.add('botaodeletar');
            deletebtn.setAttribute('id', 'botaodeletar' + x);

            document.addEventListener("keyup", function(event) {if (event.code === 'Enter') {enviar2.click();}});
            enviar2.addEventListener('click', () => {
                if (conteudo.value == "") {
                    console.log('[ERRO] Digite um texto');
                } else {
                    divTexto.classList.add('textcard');
                    divTexto.appendChild(p1);
                    divTexto.appendChild(deletebtn);
                    divTextos.appendChild(divTexto);
    
                    let p2 = document.getElementById('texto' + x);
                    p2.innerHTML = conteudo.value;
                    let deletebtn2 = document.getElementById('botaodeletar' + x);
                    deletebtn2.addEventListener('click', () => {
                        divTexto.style.display = 'none';
                    });
    
                    popup3.style.display = 'none';
                }
            });
        }

        popup.style.display = 'none';
    }
}

function zfazendo() {
    if (divFA.classList.contains('fazendo')) {
        alert('[ERRO] O Card Fazendo já existe.');
    } else {
        divFA.classList.add('default');
        divFA.classList.add('fazendo');
        cards.appendChild(divFA);

        let fecharFA = document.createElement('button');
        fecharFA.classList.add('fechar');
        fecharFA.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        fecharFA.addEventListener('click', () => {
            divFA.classList.remove('fazendo');
            divFA.removeChild(divTextos);
            divFA.removeChild(fecharFA)
            divFA.removeChild(h2FA);
            divFA.removeChild(botaoFA);
            cards.removeChild(divFA);
        });
        divFA.appendChild(fecharFA);

        let h2FA = document.createElement('h2');
        h2FA.innerHTML = 'Fazendo';
        divFA.appendChild(h2FA);

        let divTextos = document.createElement('div');
        divFA.appendChild(divTextos);

        let botaoFA = document.createElement('button');
        botaoFA.classList.add('addbtn');
        botaoFA.innerHTML = '+ Adicionar Lembrete';
        botaoFA.addEventListener('click', () => {
            popupFA();
        })
        divFA.appendChild(botaoFA);

        function popupFA() {
            x++;

            popup3.style.display = 'block';
            conteudo.value = "";

            let divTexto = document.createElement('div');
            divTexto.setAttribute('id', 'divTexto' + x);

            let p1 = document.createElement('p');
            p1.setAttribute('id', 'texto' + x);

            let deletebtn = document.createElement('button');
            deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deletebtn.classList.add('botaodeletar');
            deletebtn.setAttribute('id', 'botaodeletar' + x);

            document.addEventListener("keyup", function(event) {if (event.code === 'Enter') {enviar2.click();}});
            enviar2.addEventListener('click', () => {
                if (conteudo.value == "") {
                    console.log('[ERRO] Digite um texto');
                } else {
                    divTexto.classList.add('textcard');
                    divTexto.appendChild(p1);
                    divTexto.appendChild(deletebtn);
                    divTextos.appendChild(divTexto);
    
                    let p2 = document.getElementById('texto' + x);
                    p2.innerHTML = conteudo.value;
                    let deletebtn2 = document.getElementById('botaodeletar' + x);
                    deletebtn2.addEventListener('click', () => {
                        divTexto.style.display = 'none';
                    });
    
                    popup3.style.display = 'none';
                }
            });
        }

        popup.style.display = 'none';
    }
}

function zfeito() {
    if (divFE.classList.contains('feito')) {
        alert('[ERRO] O Card Feito já existe.');
    } else {
        divFE.classList.add('default');
        divFE.classList.add('feito');
        cards.appendChild(divFE);

        let fecharFE = document.createElement('button');
        fecharFE.classList.add('fechar');
        fecharFE.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        fecharFE.addEventListener('click', () => {
            divFE.classList.remove('feito');
            divFE.removeChild(divTextos);
            divFE.removeChild(fecharFE)
            divFE.removeChild(h2FE);
            divFE.removeChild(botaoFE);
            cards.removeChild(divFE);
        });
        divFE.appendChild(fecharFE);

        let h2FE = document.createElement('h2');
        h2FE.innerHTML = 'Feito';
        divFE.appendChild(h2FE);
        
        let divTextos = document.createElement('div');
        divFE.appendChild(divTextos);

        let botaoFE = document.createElement('button');
        botaoFE.classList.add('addbtn');
        botaoFE.innerHTML = '+ Adicionar Lembrete';
        botaoFE.addEventListener('click', () => {
            popupFE();
        })
        divFE.appendChild(botaoFE);

        function popupFE() {
            x++;

            popup3.style.display = 'block';
            conteudo.value = "";

            let divTexto = document.createElement('div');
            divTexto.setAttribute('id', 'divTexto' + x);

            let p1 = document.createElement('p');
            p1.setAttribute('id', 'texto' + x);

            let deletebtn = document.createElement('button');
            deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deletebtn.classList.add('botaodeletar');
            deletebtn.setAttribute('id', 'botaodeletar' + x);

            document.addEventListener("keyup", function(event) {if (event.code === 'Enter') {enviar2.click();}});
            enviar2.addEventListener('click', () => {
                if (conteudo.value == "") {
                    console.log('[ERRO] Digite um texto');
                } else {
                    divTexto.classList.add('textcard');
                    divTexto.appendChild(p1);
                    divTexto.appendChild(deletebtn);
                    divTextos.appendChild(divTexto);
    
                    let p2 = document.getElementById('texto' + x);
                    p2.innerHTML = conteudo.value;
                    let deletebtn2 = document.getElementById('botaodeletar' + x);
                    deletebtn2.addEventListener('click', () => {
                        divTexto.style.display = 'none';
                    });
    
                    popup3.style.display = 'none';
                }
            });
        }

        popup.style.display = 'none';
    }
}

//---------------------------------------------------------------//

function novoCard() {
    if (titulo.value == "" || titulo.value.length > "20") {
        alert('[ERRO] O Título não pode ficar em branco, e tem que ser menor do que 20 caracteres.');
        console.log(cor.value);
    } else {
        x++;

        let divAL = document.createElement('div');
        divAL.setAttribute('id', 'outrocard' + x);
        cards.appendChild(divAL);
        divAL.classList.add('default');
        divAL.style.backgroundColor = cor.value;

        let fecharAL = document.createElement('button');
        fecharAL.classList.add('fechar');
        fecharAL.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        fecharAL.addEventListener('click', () => {
            divAL.removeChild(divTextos);
            divAL.removeChild(fecharAL)
            divAL.removeChild(h2AL);
            divAL.removeChild(botaoAL);
            cards.removeChild(divAL);
        });
        divAL.appendChild(fecharAL);

        let h2AL = document.createElement('h2');
        h2AL.innerHTML = titulo.value;
        divAL.appendChild(h2AL);
        
        let divTextos = document.createElement('div');
        divAL.appendChild(divTextos);

        let botaoAL = document.createElement('button');
        botaoAL.classList.add('addbtn');
        botaoAL.innerHTML = '+ Adicionar Lembrete';
        botaoAL.addEventListener('click', () => {
            popupAL();
        })
        divAL.appendChild(botaoAL);

        function popupAL() {
            x++;

            popup3.style.display = 'block';
            conteudo.value = "";

            let divTexto = document.createElement('div');
            divTexto.setAttribute('id', 'divTexto' + x);

            let p1 = document.createElement('p');
            p1.setAttribute('id', 'texto' + x);

            let deletebtn = document.createElement('button');
            deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deletebtn.classList.add('botaodeletar');
            deletebtn.setAttribute('id', 'botaodeletar' + x);

            document.addEventListener("keyup", function(event) {if (event.code === 'Enter') {enviar2.click();}});
            enviar2.addEventListener('click', () => {
                if (conteudo.value == "") {
                    console.log('[ERRO] Digite um texto');
                } else {
                    divTexto.classList.add('textcard');
                    divTexto.appendChild(p1);
                    divTexto.appendChild(deletebtn);
                    divTextos.appendChild(divTexto);
    
                    let p2 = document.getElementById('texto' + x);
                    p2.innerHTML = conteudo.value;
                    let deletebtn2 = document.getElementById('botaodeletar' + x);
                    deletebtn2.addEventListener('click', () => {
                        divTexto.style.display = 'none';
                    });
    
                    popup3.style.display = 'none';
                }
            });
        }


        cor.value = "#b8babd";
        titulo.value = "";
        popup2.style.display = 'none';
    }
}