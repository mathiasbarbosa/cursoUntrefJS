/* 
EJERCICIO Simulador banco
1-REGISTRAR USUARIO
MONTO DE DINERO
2- INICIAR SESION 
3- DEPOSITAR
4 -EXTRAER
5- CONSULTAR MONEDAS
6- CONVERTIR DIVISAS
*/

let opcion = parseInt(prompt("Que queres hacer? \n 1-registro \n 2-login \n 3-depositar \n 4-extraer \n 5-consultar Monedas \n 6-Agregar a favoritos \n 7-Eliminar de favoritos \n 8-salir"));

const criptomonedas = ["bitcoin","ethereum", "bnb", "solana" ];
const favoritas = [];

while ( (opcion !== 8) && (opcion <= 8)  ) {
    
   switch (opcion) {
    case 1:
            let nombreRegistro = prompt("Ingrese nombre de usuario");
            let mail = prompt("ingrese mail");
            let contra = prompt("seleccione su contraseña");
            if( (nombreRegistro != "") && (mail != "") && (contra != "")){
                alert("El usuario se registro correctamente")
                alert("Bienvenido" + " " + nombreRegistro) 
            }
            else{
                alert("Ingresaste algun dato incorrecto")
            }
   break
    case 2:
        let nombreLogin = prompt("ingrese su nombre de usuario");
        let contraLogin = prompt("ingrese su contraseña");
        
        if ((nombreLogin == nombreRegistro) && (contraLogin == contra) ) {
                alert("ingreso correcto")
        }else{
            alert("error en los datos de login")
        }
    break
    case 3:
        let dinero = Number(prompt("cuanto dinero queres depositar"));
        if (dinero > 0 ) {
            alert("deposito correcto, cantidad: " + dinero )
        }else{
            alert("operacion no valida")
        }
    break
    case 5:
       for( let i = 0; i < criptomonedas.length; i++ ){
        alert("las cryptos disponibles son: " + criptomonedas[i])
       }
    break
    case 6:
        let agregar = prompt("que moneda queres agregar ?").toLowerCase();
       
        let busqueda = criptomonedas.includes(agregar);
        console.log(busqueda);
        if (busqueda) {
            favoritas.push(agregar)
            alert("Se agrego correctamente " + agregar + " a favoritos")
            console.log(favoritas);
        }

     break
     case 7:
        let eliminar = prompt("Que moneda queres elimnar de favoritos").toLowerCase();
        let busquedaEliminar = favoritas.indexOf(eliminar);
        console.log(busquedaEliminar);
        favoritas.splice(busquedaEliminar, 1);
        console.log(favoritas);

     break
    default:    
        break;
   }



    opcion =  parseInt(prompt("Que queres hacer? \n 1-registro \n 2-login \n 3-depositar \n 4-extraer \n 5-consultar Monedas \n 6-Agregar a favoritos \n 7-eliminar de favoritos \n 8-salir"))
}

