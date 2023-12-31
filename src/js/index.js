/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
passo 2 - alterar a imagem do personagem grande
passo 3 - alterar o nome do personagem grande
passo 4 - alterar a descrição do personagem grande */

//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

//passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');
console.log(personagens)

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        //passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        personagem.classList.add('selecionado');

        //Primeiro parágrafo: para cada elemento "personagem" usamos a função de detectar quando o mouse entrar no elemento. Quando este evento ocorrer, haverá a função de adicionar a classe 'selecionado' na classe já existente "personagem".

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        //o '.' é para se referir a uma classe no queryselector

        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        //função não refatorada

        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagem(personagem);
        //função refatorada(resumida), mas ainda está aí.

        //passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })

})




function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

