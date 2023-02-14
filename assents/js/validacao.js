const validForm = function (event) {
    var inputName = document.querySelector("#name")
    var inputEmail = document.querySelector("#email")
    var inputPhone = document.querySelector("#phone")
    var inputMessage = document.querySelector("#message")


    if(inputName.value == ""){
        alert("Digite seu nome");
        inputName.focus();
        return false;
    }
    if(inputEmail.value == ""){
        alert("Digite um e-mail válido");
        inputEmail.focus();
        return false;
    }
    if(inputPhone.value == ""){
        alert("Digite o número do seu whatsapp");
        inputPhone.focus();
        return false;
    }
    if(inputMessage.value == ""){
        alert("Digite o número do seu whatsapp");
        inputMessage.focus();
        return false;
    }


    alert ("Todos os dados são válidos")
}