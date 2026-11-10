let titulo = document.getElementById("titulo");
console.log("Título: " + titulo.textContent);

let descricao = document.querySelector(".descricao");
console.log("Descrição: " + descricao.textContent);

let filmes = document.querySelectorAll(".filme");

console.log("Quantidade de filmes: " + filmes.length);

filmes.forEach(function(filme, indice) {
    console.log((indice + 1) + ". " + filme.textContent);
});