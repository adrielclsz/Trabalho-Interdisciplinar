
const btnVerMais = document.getElementById("btn-vermais");

const textoExtra = document.getElementById("texto-extra");
const btn = document.getElementById("mudar-tema");
const header = document.querySelector("header");


btnVerMais.addEventListener("click", () => {
textoExtra.classList.toggle("escondido");

btnVerMais.textContent = textoExtra.classList.contains("escondido")
? "Ver mais"
: "Ver menos";
});


btn.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    header.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});
