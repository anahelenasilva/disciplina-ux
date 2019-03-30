function enviarSugestao() {
    if ($("#txtConteMais").val() == "" || $("#txtConteMais").val() == null || $("#txtConteMais").val() == undefined) {
        alert("Conte-nos mais sobre o evento que você quer sugerir");
    }
    else {
        alert("Obrigado! Sua sugestão foi registrada com sucesso");
    }
}