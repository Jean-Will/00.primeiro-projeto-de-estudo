function validarEmail(){
    var email = document.getElementById("inputEmail").value;

    if(email===" "){
        alert("Preencher campo obrigatorio!")

    }else if(email.indexOf("@")== -1 ){
            alert("email invalido")
        }
    }


console.log(validarEmail);

alert("Seja Bem Vindo");