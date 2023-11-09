document.getElementById('Total').addEventListener('click', function() {

    let numerogrupo1 = document.querySelector('input[name="radio-1"]:checked').value;
    let numerogrupo2 = document.querySelector('input[name="radio-2"]:checked').value;
    let numerogrupo3 = document.querySelector('input[name="radio-3"]:checked').value;
    let numerogrupo4 = document.querySelector('input[name="radio-4"]:checked').value;
    let numerogrupo5 = document.querySelector('input[name="radio-5"]:checked').value;
    let numerogrupo6 = document.querySelector('input[name="radio-6"]:checked').value;
    let numerogrupo7 = document.querySelector('input[name="radio-7"]:checked').value;
    let numerogrupo8 = document.querySelector('input[name="radio-8"]:checked').value;

    if(numerogrupo1 == 12){
        i1.innerText = "Masa seleccionada: Harina $12";
    }else if(numerogrupo1 == 15){
        i1.innerText = "Masa seleccionada: Chocolate $15";
    }else if(numerogrupo1 == 17){
        i1.innerText = "Masa seleccionada: Trigo $12";
    }

    if(numerogrupo2 == 7){
        i2.innerText = "Tamaño Seleccionado: Chico $7";
    }else if(numerogrupo2 == 12){
        i2.innerText = "Tamaño Seleccionado: Mediano $12";
    }else if(numerogrupo2 == 15){
        i2.innerText = "Tamaño Seleccionado: Grande $15";
    }

    if(numerogrupo3 == 10){
        i3.innerText = "Ingrediente Principal: Mermelada $10";
    }else if(numerogrupo3 == 15){
        i3.innerText = "Ingrediente Principal: Nutella $15";
    }else if(numerogrupo3 == 12){
        i3.innerText = "Ingrediente Principal: Cajeta $12";
    }

    if(numerogrupo4 == 5){
        i4.innerText = "Fruta seleccionada: Platano $5";
    }else if(numerogrupo4 == 10){
        i4.innerText = "Fruta seleccionada: Durazno $10";
    }else if(numerogrupo4 == 7){
        i4.innerText = "Fruta seleccionada: Fresa $7";
    }

    if(numerogrupo5 == 12){
        i5.innerText = "Extra Seleccionado: Helado $12";
    }else if(numerogrupo5 == 5){
        i5.innerText = "Extra Seleccionado: Chispas $5";
    }else if(numerogrupo5 == 0){
        i5.innerText = "Extra Seleccionado: Ninguno $0";
    }

    if(numerogrupo6 == 20){
        i6.innerText = "Bebida seleccionada: Café $20";
    }else if(numerogrupo6 == 17){
        i6.innerText = "Bebida seleccionada: Té $17";
    }else if(numerogrupo6 == 19){
        i6.innerText = "Bebida seleccionada: Licuado $19";
    }else if(numerogrupo6 == 0){
        i6.innerText = "Bebida seleccionada: Ninguno $0";
    }

    if(numerogrupo7 == 5){
        i7.innerText = "Tipo de Cubiertos: Caja de crepa $5";
    }else if(numerogrupo7 == 12){
        i7.innerText = "Tipo de Cubiertos: Plato y cubiertos $12";
    }else if(numerogrupo7 == 7){
        i7.innerText = "Tipo de Cubiertos: Solo plato $7";
    }

    if(numerogrupo8 == 100){
        i8.innerText = "Tipo de entrega: A domicilio $100";
    }else if(numerogrup8 == 0){
        i8.innerText = "Tipo de entrega: En sucursal $0";
    }

    let resultado = parseInt(numerogrupo1) +  parseInt(numerogrupo2) + parseInt(numerogrupo3) +  parseInt(numerogrupo4) +parseInt(numerogrupo5) +  parseInt(numerogrupo6) + parseInt(numerogrupo7) +  parseInt(numerogrupo8);
    let ivatot = resultado * 0.16;
    let totalprop = ivatot + resultado;
    iva.innerText =  "El IVA es de:"+ " " + "$"+ ivatot;
    subtotal.innerText = "El subtotal es de:" + " "+ resultado;
    total.innerText = "El total es de:" + " "+ totalprop;

});

document.getElementById('Reiniciar').addEventListener('click', function() {
    location.reload();
})