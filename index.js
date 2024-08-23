
function esBisiesto(año) {
    if(año % 4 === 0){
        if(año % 100 === 0){
            if(año % 400 === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
    
}

console.log(esBisiesto(2024))
console.log(esBisiesto(1994))
console.log(esBisiesto(1999))

function celsiusAfahrenheit(celsius){
    let fahrenheit;

    fahrenheit = (celsius *9/5) + 32;
    return fahrenheit
}

console.log(celsiusAfahrenheit(-30))
console.log(celsiusAfahrenheit(-12))
console.log(celsiusAfahrenheit(0))


function mayorDeDos(n1, n2) {

    if (n1 > n2) 
        return n1;
    else if (n1<n2)
        return n2;
    else 
     return ("son iguales")
}
console.log(mayorDeDos(56, 53))


function convertirMinutos(minutos) {
  
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} hora${horas !== 1 ? 's' : ''} y ${minutosRestantes} minuto${minutosRestantes !== 1 ? 's' : ''}`;
}

console.log(convertirMinutos(130)); 
console.log(convertirMinutos(60));  
console.log(convertirMinutos(230));  

function estaEnRango(numero, inicio, fin) {

    return numero >= inicio && numero <= fin;
}

console.log(estaEnRango(5, 1, 20)) 
console.log(estaEnRango(15, 5, 10))  
console.log(estaEnRango(1, 12, 8)) 

function calcularPrecioFinal(precioinicial, Descuento) {

    const descuento = precioinicial * (Descuento / 100);
    
    const precioFinal = precioinicial - descuento;
    
    return precioFinal;
}

console.log(calcularPrecioFinal(150, 20))
console.log(calcularPrecioFinal(25, 15))

function puedeVotar (edad){

    if( edad >= 18)
        return true;
    else
       return false;

}
console.log(puedeVotar(18))
console.log(puedeVotar(17))
console.log(puedeVotar(19))

function calcularAreaTriangulo(base, altura) {

    if (base <= 0 || altura <= 0) {
        throw new Error("La base y la altura deben ser números positivos");
    }
    const area = 0.5 * base * altura;

    return area;
}
console.log(calcularAreaTriangulo(10, 5))
console.log(calcularAreaTriangulo(9, 4))
console.log(calcularAreaTriangulo(15, 8))