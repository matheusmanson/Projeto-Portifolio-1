const botaogradu = document.getElementsByClassName('botaogradu')[0]; // Obtenha o primeiro elemento com a classe 'box12'

botaogradu.addEventListener("mouseover", () => {
  botaogradu.style.backgroundColor = "black"; // Define a cor de fundo para preto quando o mouse passar por cima
});

botaogradu.addEventListener("mouseout", () => {
    botaogradu.style.backgroundColor = ""; // Remove a cor de fundo quando o mouse sai
});