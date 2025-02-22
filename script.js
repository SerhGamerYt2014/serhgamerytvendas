let index = 0;
function mostrarDepoimento() {
    let depoimentos = document.querySelectorAll('.depoimento');
    depoimentos.forEach((depo, i) => {
        depo.classList.toggle('active', i === index);
    });
    index = (index + 1) % depoimentos.length;
}
setInterval(mostrarDepoimento, 4000);

function comprarApp(appNome) {
    const mensagem = encodeURIComponent(`Opa, Gostaria de adquirir o app do nível: ${appNome}.`);
    const numeroWhatsApp = "5538984132428"; // Seu número no formato internacional (sem + e sem espaços)
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, "_blank");
}

function desativar() {
  document.getElementById("meuBotao").disabled = true;
}
