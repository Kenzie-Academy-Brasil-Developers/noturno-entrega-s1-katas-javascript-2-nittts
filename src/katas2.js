// comece a criar a sua função add na linha abaixo
function add(v1, v2) {
    let resultado = v1 + v2
    return resultado
}
// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(valor1,valor2) {
    let resultado = 0
    for(let contador = 0; contador < valor2; contador++){
        resultado = add(resultado, valor1)
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
//console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(x,n) {
    let resultado = 0
    let numeroSec = x
    for(let contador = 0; contador < n; contador++) {
        resultado = multiply(multiply(x,numeroSec),multiply(x, numeroSec))
    }
   return resultado
}
// descomente a linha seguinte para testar sua função
//console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(num) {
    let resultado = 1
    for(index = num; index > 0; index--) {
        resultado = multiply(resultado,index)
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(num) {
    let num1 = 0
    let num2 = 1
    let resultado = 0
    for(let contador = 1;contador < num; contador++ ) {
        console.log(num1)
        resultado = add(num1,num2)
        num1 = num2
        num2 = resultado    
    }
    return resultado
}
console.log(fibonacci(10))
// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');