function ejecutar(){
    marca = document.forma.marca.value;
    modelo = document.forma.modelo.value;
    anno = document.forma.anno.value;

    if (marca.length == 0){
        document.forma.marca.style.background="red";
        alert("error, se debe indicar la marca ...");
    }
    else {
        if (modelo.length == 0){
            document.forma.modelo.style.background="red";
            alert("error, se debe indicar el modelo ...");
        }
        else {
            if (anno.length == 0){
                document.forma.anno.style.background="red";
                alert("error, se debe indicar el año ...");
            }
        }
    }
}

function campo_marca(){
    document.forma.marca.style.background="white";
}

function campo_modelo(){
    document.forma.modelo.style.background="white";
}

function campo_anno(){
    document.forma.anno.style.background="white";
}
