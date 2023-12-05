let precio = 0, cuotas = 0, pc = 0, continuar = "no";

//pc (precio de cuotas)


function calcularTotal (precio, cuotas){
    switch (cuotas) {
        //en 3 cuotas tiene un recargo del 10%
        case 3: pc = ((precio + precio * 10/100) /3).toFixed(2);
            alert (`El precio final seria de $${pc*3} en 3 cuotas de $${pc}`)
            break;
        //en 6 cuotas tiene un recargo del 20%
        case 6: pc = ((precio + precio * 35/100) /6).toFixed(2);
            alert (`El precio final seria de $${pc*6} en 6 cuotas de $${pc}`)
            break;
        //en 9 cuotas tiene un recargo del 75%    
        case 9: pc = ((precio + precio * 75/100) /9).toFixed(2);
            alert (`El precio final seria de $${pc*9} en 9 cuotas de $${pc}`)
            break;
        //en 12 cuotas tiene un recargo del 125%    
        case 12: pc = ((precio + precio * 125/100) /12).toFixed(2);
            alert (`El precio final seria de $${pc*12} en 12 cuotas de $${pc}`)
            break;
    
        default:{
            console.log ("Las cuotas no estan disponibles")
            break;
        }
            
    }
}
do {
    precio = parseFloat (prompt("Ingrese precio del producto"));
    cuotas = parseInt(prompt("Ingrese numero cuotas (3,6,9,12)"));
    calcularTotal (precio,cuotas);
    continuar = prompt("Desea continuar? (si/no)").toLowerCase();
}

while (continuar === "si");

alert ("Muchas gracias, que tenga un buen dia!!");