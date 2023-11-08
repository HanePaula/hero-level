const formulario = document.getElementById('form');
const resposta = document.getElementById('resposta');

formulario.addEventListener('submit', (submit) => {
    submit.preventDefault();
    resposta.dataset.nome = resposta.value;
    let nome = resposta.dataset.nome;
    console.log(nome);
})