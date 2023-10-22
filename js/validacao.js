function validarEmail(){
    email = document.querySelector("#email");
    emailValido = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email.value);

    if(emailValido){
        alert("Este email está OK!");
    }else{
        alert("Este email não é válido!");
    }

}


