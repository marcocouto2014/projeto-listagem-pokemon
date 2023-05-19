const botaoAlterarTema = document.getElementById /*vari const pega doc. elemento id*/("botao-alterar-tema");                      
const body = document.querySelector("body")  /*vari p/ pegar no documento a tag body*/
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click",() => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro") /*toggle alterna as classes modo-escuro (sol/lua) */

if (modoEscuroEstaAtivo) {
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

} else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
}
});



