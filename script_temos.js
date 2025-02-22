document.getElementById("aceitar-termos").addEventListener("click", function() {
    const appNome = localStorage.getItem("appSelecionado") || "App Desconhecido";
    const mensagem = encodeURIComponent(`Opa, Gostaria de adquirir o app do nível: ${appNome}.`);
    const numeroWhatsApp = "5538984132428"; // Seu número no formato internacional (sem + e sem espaços)
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, "_blank");
    
    window.location.href = url;
});
