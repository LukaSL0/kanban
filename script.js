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

fazer.addEventListener('click', () => {
    let id = 1;
    cardDefinido(id)
});
fazendo.addEventListener('click', () => {
    let id = 2;
    cardDefinido(id)
});
feito.addEventListener('click', () => {
    let id = 3;
    cardDefinido(id)
});
const divAF = document.createElement('div');
const divFA = document.createElement('div');
const divFE = document.createElement('div');

let x = 0;

const cardDefinido = (id) => {
    console.log(id);
    if (id == 1 && divAF.classList.contains('afazer')) {
        alert('[ERRO] O Card A Fazeres já existe.');
    } else if (id == 2 && divFA.classList.contains('fazendo')) {
        alert('[ERRO] O Card Fazendo já existe.');
    } else if (id == 3 && divFE.classList.contains('feito')) {
        alert('[ERRO] O Card Feito já existe.');
    } else {
        if (id == 1) {
            var divPadrao = divAF;
            var classePadrao = 'afazer';
            var textoPadrao = 'A Fazeres';
        } else if (id == 2) {
            var divPadrao = divFA;
            var classePadrao = 'fazendo';
            var textoPadrao = 'Fazendo';
        } else if (id == 3) {
            var divPadrao = divFE;
            var classePadrao = 'feito';
            var textoPadrao = 'Feito';
        }

        divPadrao.classList.add('default');
            divPadrao.classList.add(classePadrao);
            cards.appendChild(divPadrao);
    
            let fecharAF = document.createElement('button');
            fecharAF.classList.add('fechar');
            fecharAF.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            fecharAF.addEventListener('click', () => {
                divPadrao.classList.remove(classePadrao);
                divPadrao.removeChild(divTextos);
                divPadrao.removeChild(fecharAF)
                divPadrao.removeChild(h2AF);
                divPadrao.removeChild(botaoAF);
                cards.removeChild(divPadrao);
            });
            divPadrao.appendChild(fecharAF);
    
            let h2AF = document.createElement('h2');
            h2AF.innerHTML = textoPadrao;
            divPadrao.appendChild(h2AF);
    
            let divTextos = document.createElement('div');
            divPadrao.appendChild(divTextos);
    
            let botaoAF = document.createElement('button');
            botaoAF.classList.add('addbtn');
            botaoAF.innerHTML = '+ Adicionar Lembrete';
            botaoAF.addEventListener('click', () => {
                popupPadrao();
            })
            divPadrao.appendChild(botaoAF);
    
            const popupPadrao = () => {
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

const novoCard = () => {
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

        const popupAL = () => {
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