const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
const imagemHumor = document.getElementById("imagem-humor");
 
const frasesPorHumor = {
  feliz: [
    "Continue espalhando essa energia positiva!",
    "Aproveite cada momento de alegria!",
    "Sua felicidade pode inspirar outras pessoas."
  ],
  triste: [
    "Tudo bem não estar bem o tempo todo.",
    "Você não está sozinho, tudo vai melhorar.",
    "Seja gentil consigo mesmo hoje."
  ],
  ansioso: [
    "Respire fundo, um passo de cada vez.",
    "Acalme sua mente, você está fazendo o seu melhor.",
    "Foque no agora, o futuro se constrói aos poucos."
  ],
  motivado: [
    "Aproveite essa motivação para realizar algo importante!",
    "Você tem tudo o que precisa para vencer.",
    "Continue firme, seus esforços terão resultado."
  ],
  neutro: [
    "Cada dia é uma nova oportunidade.",
    "O equilíbrio também é essencial.",
    "Cuide de si mesmo, mesmo nos dias comuns."
  ]
}

const imagensPorHumor = {
  feliz: "https://thumbs.dreamstime.com/b/emoticon-muito-feliz-22756611.jpg",
  triste: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciHS91w_VmHofEWMC6d9_RmEGYtrT6JZIRQ&s",
  ansioso: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiYHY-kuQwri2_awnDa3LYazJRRTZUSxO4g&s",
  motivado: "https://cdn-icons-png.flaticon.com/512/4833/4833969.png",
  neutro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguyhaccpcy1juH9OUZ7bnybxj5e1TyqnPrw&s",
};

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const humor = humorInput.value.toLowerCase().trim();
  localStorage.setItem("humor", humor);
  humorRegistrado.textContent = `Seu humor registrado: ${humor}`;
});
 
mensagemBtn.addEventListener("click", function() {
  let humor = localStorage.getItem("humor");
  if (!humor || !frasesPorHumor[humor]) {
    humor = "neutro";
  }
  const frases = frasesPorHumor[humor];
  const fraseSorteada = frases[Math.floor(Math.random() * frases.length)];
  mensagemMotivacional.textContent = fraseSorteada;
  const imagem = imagensPorHumor[humor];
  imagemHumor.innerHTML = `<img src="${imagem}" alt="${humor}" width="200">`;
});