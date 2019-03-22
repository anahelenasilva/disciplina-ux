function enviarDivulgacao() {
    var nome = $("#txtNome").val();
    var telefone = $("#txtTelefone").val();
    var email = $("#txtEmail").val();
    var descricao = $("#txtDescricao").val();

    if (nome === "" || nome === undefined ||
        telefone === "" || telefone === undefined ||
        email === "" || email === undefined ||
        descricao === "" || descricao === undefined) {
        
        alert("Todos os campos são obrigatórios");
    } else {
        alert("Agradecemos a sua divulgação! Entraremos em contato o mais breve possível");
        $("#txtNome").val('');
        $("#txtTelefone").val('');
        $("#txtEmail").val('');
        $("#txtDescricao").val('');
    }
}