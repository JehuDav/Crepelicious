
document.getElementById('Calificacion').addEventListener('click', function() {

    let numerogrupo1 = document.querySelector('input[name="grupo1"]:checked').value;
    let numerogrupo2 = document.querySelector('input[name="grupo2"]:checked').value;
    let numerogrupo3 = document.querySelector('input[name="grupo3"]:checked').value;
    let numerogrupo4 = document.querySelector('input[name="grupo4"]:checked').value;
    let numerogrupo5 = document.querySelector('input[name="grupo5"]:checked').value;
    let numerogrupo6 = document.querySelector('input[name="grupo6"]:checked').value;
    let numerogrupo7 = document.querySelector('input[name="grupo7"]:checked').value;
    let numerogrupo8 = document.querySelector('input[name="grupo8"]:checked').value;
    let numerogrupo9 = document.querySelector('input[name="grupo9"]:checked').value;
    let numerogrupo10 = document.querySelector('input[name="grupo10"]:checked').value;
    let resultado = parseInt(numerogrupo1) +  parseInt(numerogrupo2) + parseInt(numerogrupo3) +  parseInt(numerogrupo4) +parseInt(numerogrupo5) +  parseInt(numerogrupo6) + parseInt(numerogrupo7) +  parseInt(numerogrupo8) + parseInt(numerogrupo9) +  parseInt(numerogrupo10);
    textosalida.innerText =  "Tu resultado es de:"+ " " + resultado + "/10";

    if(numerogrupo1 == 1){
        p1.innerText = "Can I park here?" + " " +"✔️";
    }else{
        p1.innerText = "Can I park here?" + " " +"✖️";
    }

    if(numerogrupo2 == 1){
        p2.innerText = "What colour will you paint the childre's bedroom?" + " " +"✔️";
    }else{
        p2.innerText = "What colour will you paint the childre's bedroom?" + " " +"✖️";
    }

    if(numerogrupo3 == 1){
        p3.innerText = "I can't understand this email" + " " +"✔️";
    }else{
        p3.innerText = "I can't understand this email" + " " +"✖️";
    }

    if(numerogrupo4 == 1){
        p4.innerText = "I'd like two tickets for tomorrow night" + " " +"✔️";
    }else{
        p4.innerText = "I'd like two tickets for tomorrow night" + " " +"✖️";
    }

    if(numerogrupo5 == 1){
        p5.innerText = "Shaw we go to the gym now?" + " " +"✔️";
    }else{
        p5.innerText = "Shaw we go to the gym now?" + " " +"✖️";
    }

    if(numerogrupo6 == 1){
        p6.innerText = "The company needs to decide ..... and for all what it's position is on this point" + " " +"✔️";
    }else{
        p6.innerText = "The company needs to decide ..... and for all what it's position is on this point" + " " +"✖️";
    }

    if(numerogrupo7 == 1){
        p7.innerText = "Don't put your cup on the ..... of table - someone will knock it off " + " " +"✔️";
    }else{
        p7.innerText = "Don't put your cup on the ..... of table - someone will knock it off " + " " +"✖️";
    }

    if(numerogrupo8 == 1){
        p8.innerText = "I'm sorry - I didn't ..... to disturb you" + " " +"✔️";
    }else{
        p8.innerText = "I'm sorry - I didn't ..... to disturb you" + " " +"✖️";
    }

    if(numerogrupo9 == 1){
        p9.innerText = "The singer ended the concert ..... her most popular song" + " " +"✔️";
    }else{
        p9.innerText = "The singer ended the concert ..... her most popular song" + " " +"✖️";
    }

    if(numerogrupo10 == 1){
        p10.innerText = "I was looking forward ..... at the new restaurant, but it was closed" + " " +"✔️";
    }else{
        p10.innerText = "I was looking forward ..... at the new restaurant, but it was closed" + " " +"✖️";
    }
});

document.getElementById('Test').addEventListener('click',function reiniciar(){
    document.querySelectorAll('[name= "grupo1"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo2"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo3"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo4"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo5"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo6"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo7"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo8"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo9"]').forEach((x)=>x.checked= false);
    document.querySelectorAll('[name= "grupo10"]').forEach((x)=>x.checked= false);
    
    textosalida.innerText= null;
    p1.innerText = "Can I park here?";
    p2.innerText = "What colour will you paint the childre's bedroom?";
    p3.innerText = "I can't understand this email";
    p4.innerText = "I'd like two tickets for tomorrow night";
    p5.innerText = "Shaw we go to the gym now?";
    p6.innerText = "The company needs to decide ..... and for all what it's position is on this point";
    p7.innerText = "Don't put your cup on the ..... of table - someone will knock it off ";
    p8.innerText = "I'm sorry - I didn't ..... to disturb you";
    p9.innerText = "The singer ended the concert ..... her most popular song";
    p10.innerText = "I was looking forward ..... at the new restaurant, but it was closed";
});

