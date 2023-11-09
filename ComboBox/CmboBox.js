    document.getElementById('Calificacion').addEventListener('click', function() {
        let valor1 = document.getElementById("P1").value;
        let valor2 = document.getElementById("P2").value;
        let valor3 = document.getElementById("P3").value;
        let valor4 = document.getElementById("P4").value;
        let valor5 = document.getElementById("P5").value;
        let valor6 = document.getElementById("P6").value;
        let valor7 = document.getElementById("P7").value;
        let valor8 = document.getElementById("P8").value;
        let valor9 = document.getElementById("P9").value;
        let valor10 = document.getElementById("P10").value;

        let resultado = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) + parseInt(valor5) + parseInt(valor6) + parseInt(valor7) + parseInt(valor8) + parseInt(valor9) + parseInt(valor10);
            
        textosalida.innerText= "Tu resultado es de:" + " " + resultado + "/10";

        if(valor1 == 1){
            R1.innerText = " "+"✔️";
        }else{
            R1.innerText = " " +"✖️" ;
        }
    
        if(valor2 == 1){
            R2.innerText = " "+"✔️";
        }else{
            R2.innerText = " " +"✖️";
        }
    
        if(valor3 == 1){
            R3.innerText = " "+"✔️";
        }else{
            R3.innerText = " " +"✖️";
        }
    
        if(valor4 == 1){
            R4.innerText = " "+"✔️";
        }else{
            R4.innerText = " " +"✖️";
        }
    
        if(valor5 == 1){
            R5.innerText = " "+"✔️";
        }else{
            R5.innerText = " " +"✖️";
        }
    
        if(valor6 == 1){
            R6.innerText = " "+"✔️";
        }else{
            R6.innerText = " " +"✖️";
        }
    
        if(valor7 == 1){
            R7.innerText = " "+"✔️";
        }else{ 
            R7.innerText = " " +"✖️";
        }
    
        if(valor8 == 1){
            R8.innerText = " "+"✔️";
        }else{
            R8.innerText = " " +"✖️";
        }
    
        if(valor9 == 1){
            R9.innerText = " "+"✔️";
        }else{
            R9.innerText = " " +"✖️";
        }
    
        if(valor10 == 1){
            R10.innerText = " "+"✔️";
        }else{
            R10.innerText = " " +"✖️";
        }
    });

    document.getElementById('Reiniciar').addEventListener('click', function() {
        location.reload();
    })