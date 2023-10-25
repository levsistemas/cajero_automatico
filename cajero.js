console.log('Bienvenido a nuestro Cajero Automatico de Codo a Codo v4.0')
console.log('Por favor ingrese su tarjeta con su nuevo PIN')

var PIN1=0
var PIN2=0
var intentos=0

registroPIN()
function registroPIN(){
    PIN1=prompt('Ingrese su número PIN de cuatro digitos')
    PIN2=prompt('Por favor reingrese su número PIN nuevamente')
    PIN1=PIN1.toString()
    PIN2=PIN2.toString()
    validacionPIN()
}

function validacionPIN(){
    if(PIN1.length==4 && PIN2.length==4){
        console.log('PIN1 tiene cuatro digitos ' + PIN1)
        console.log('PIN2 tiene cuatro digitos ' + PIN2)
        PIN1=parseInt(PIN1)
        PIN2=parseInt(PIN2)
    } else {
        console.log('PIN1 NO tiene cuatro digitos ' + PIN1)
        console.log('PIN2 NO tiene cuatro digitos ' + PIN2)
        registroPIN()
    }
    while(PIN1!==PIN2){
        console.log('Los datos no son iguales, por favor vuelva a ingresar nuevamente...')
        intentos++
        console.log('intento: ' + intentos + '/3')
        console.log(PIN1)
        console.log(PIN2)
        if(intentos>=3){
            console.log('Su tarjeta se encuentra bloqueada, reintente mañana o comuniquese a sistemas')
            break
        } else {
            registroPIN()
        }
    }
}

if(PIN1==PIN2) {
    console.log('PIN ingresado y registrado correctamente, puede continuar operando')
    console.log('¿Que opcion desea elegir?')
    var saldo=30000
    var operar=true
    while(operar==true){
        var OPERACION=parseInt(prompt('Seleccione el número de la opcion deseada: 1-Extraccion 2-Ingresar dinero 3-Cambio de clave 4-SALIDA'))
        switch (OPERACION){
            case 1:
                console.log('Extrayendo dinero...')
                var retirar_dinero=0
                retirarDinero()
                function retirarDinero(){
                    retirar_dinero=parseInt(prompt('Escriba el número de la cantidad a retirar (100,200,300,500,1000...)'))
                    if(retirar_dinero<=0){
                        console.log('No se puede ingresar un valor monetario negativo o igual a cero')
                        retirarDinero()
                    }
                    var decimal=parseFloat(retirar_dinero/100)
                    if(!Number.isInteger(decimal)){
                        console.log('Debes seleccionar multiplos de 100. Seleccionaste ' + retirar_dinero)
                        retirarDinero()
                    }
                }
                if(saldo>retirar_dinero || saldo==retirar_dinero){
                    console.log('Usted va a retirar $' + retirar_dinero + ' de $' + saldo + ' disponibles que tiene en su cuenta')
                    saldo=saldo-retirar_dinero
                    console.log('Usted ahora tiene $' + (saldo))
                } else {
                    console.log('Cantidad insuficiente...')
                    console.log('Intentas retirar $' + retirar_dinero + ' de un total de $ ' + saldo)
                }
                var respuesta=prompt('¿Desea continuar operando? si/no').toLowerCase()
                if(respuesta=='si'){
                    operar=true
                } else {
                    console.log('Saliendo... retire su tarjeta...')
                    operar=false
                }
                break
            case 2:
                console.log('Ingresando dinero')
                var ingresar_dinero=0
                verificarDinero()
                function verificarDinero(){
                    ingresar_dinero=parseInt(prompt('Escriba el número de la cantidad a ingresar'))
                    if(ingresar_dinero<=0){
                        console.log('No se puede ingresar un valor monetario negativo o igual a cero')
                        verificarDinero()
                    }
                    var decimal=parseFloat(ingresar_dinero/100)
                    if(!Number.isInteger(decimal)){
                        console.log('Debes seleccionar multiplos de 100. Seleccionaste ' + ingresar_dinero)
                        verificarDinero()
                    }
                }
                console.log('Usted esta ingresando $' + ingresar_dinero + ' de una caja de ahorros con $' + saldo + ' disponible')
                saldo=saldo+ingresar_dinero
                console.log('El estado actual de su caja de ahorros en pesos es de $' + saldo)
                var respuesta=prompt('¿Desea continuar operando? si/no').toLowerCase()
                if(respuesta=='si'){
                    operar=true
                } else {
                    console.log('Saliendo... retire su tarjeta...')
                    operar=false
                    break
                }
                break
            case 3:
                console.log('Cambiando de clave...')
                registroPIN()
                if(PIN1==PIN2){
                    console.log('Cambio de clave exitoso')
                }
                break
            case 4:
                console.log('Saliendo... no se olvide de retirar su tarjeta...')
                operar=false
                break
            default:
                console.log('Proximamente...')
                operar=false
        }
    }
}