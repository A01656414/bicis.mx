function ejecutar(){
    nombre = document.forma.nombre.value;
    a_pat = document.forma.a_pat.value;
    mail = document.forma.mail.value;

    if (nombre.length == 0){
        document.forma.nombre.style.background="red";
        alert("error, se debe indicar el nombre ...");
    }
    else {
        if (a_pat.length == 0){
            document.forma.a_pat.style.background="red";
            alert("error, se debe indicar el apellido paterno ...");
        }
        else {
            if (mail.length == 0){
                document.forma.mail.style.background="red";
                alert("error, se debe indicar el email ...");
            }
        }
    }
}

function campo_nombre(){
    document.forma.nombre.style.background="white";
}

function campo_a_pat(){
    document.forma.a_pat.style.background="white";
}

function campo_mail(){
    document.forma.mail.style.background="white";
}
