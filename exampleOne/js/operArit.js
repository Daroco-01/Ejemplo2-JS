function sumar(){

 //recibir los datos
 let numeroU = parseInt( document.getElementById("nUno").value)
 let numeroD = parseInt( document.getElementById("nDos").value)


     //procesar los datos
     let resultado = parseInt(numeroU + numeroD)


     //entregar los resultados
      document.getElementById("resulOperaciones").innerHTML = resultado


}
function multiplicar(){

     //recibir los datos
     let numeroU = parseInt( document.getElementById("nUno").value)
     let numeroD = parseInt( document.getElementById("nDos").value)
    
    
         //procesar los datos
         let resultado = parseInt(numeroU * numeroD)
    
    
         //entregar los resultados
          document.getElementById("resulOperaciones").innerHTML = resultado
    
    
    }
    // calcular area triangulo
    function areaTriangle(){
         let base = parseInt(document.getElementById("base").value);
         let height = parseInt(document.getElementById("heigth").value);
         let resultArea;
         resultArea = parseInt(base * heigth)/2;
         
         document.getElementById("resultAreaTriangle").innerHTML = resultArea;

    }



    //calcular area circulo