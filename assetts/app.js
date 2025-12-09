
const btnVerMais = document.getElementById("btn-vermais");

const textoExtra = document.getElementById("texto-extra");
const btn = document.getElementById("mudar-tema");
const header = document.querySelector("header");


// btnVerMais.addEventListener("click", () => {
// textoExtra.classList.toggle("escondido");
// textoExtra,classList.toggle("escondido2");

// btnVerMais.textContent = textoExtra.classList.contains("escondido")
// btnVerMais.textContent = textoExtra.classList.contains("escondido2")

// ? "Ver mais"
// : "Ver menos";
// });

document.querySelectorAll(".btn-vermais").forEach(botao => {

    botao.addEventListener("click", () => {

        // Pega o texto logo DEPOIS do botão
        const texto = botao.nextElementSibling;

        // Alternar visibilidade
        if (texto.classList.contains("escondido")) {
            texto.classList.remove("escondido");
            botao.textContent = "Ver menos";
        } else {
            texto.classList.add("escondido");
            botao.textContent = "Ver mais";
        }
    });

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
