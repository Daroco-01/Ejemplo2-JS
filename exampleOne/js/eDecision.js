function mostrarMensaje(){
     let edad = parseInt(document.getElementById('edad').value)

     //if (edad >= 18){
         // mensaje = " eres mayor de edad perro"

   //  }else{
       //mensaje ="eres menor de edad perrito"          
     //}

     // If con operador terniario
     let mensaje= (edad >= 18)? "eres mayor de edad. viejito" : "eres un jovenzuelo perro"

     //alert(mensaje)
     document.write(mensaje)

}

function mostrarMensajeDos(){
     let edadP = parseInt(document.getElementById('edadP').value)
     let estaturaP = parseInt(document.getElementById('estaturaP').value)
     let pesoP = parseInt(document.getElementById('pesoP').value)

     let parametroEdad = 80
     let parametroEstatura = 1.40
     let parametroPeso= 70
     const mensajeDecision= ""

     if (edadP <= parametroEdad) {
                  if (estaturaP >= parametroEstatura) {
                  if (pesoP == parametroPeso) {
                           mensajeDesicion = "Apto para realizar el deporte"
                      } else {
                           mensajeDesicion ="No apto. Peso no valido"
                      }
                  } else {
                      mensajeDesicion ="No apto. Estatura no valida"
                 }
           } else {
                  mensajeDesicion ="No apto. Edad no permitida"
               }
          
              //if con operador logico AND(&&)
          
              alert(mensajeDesicion)
}