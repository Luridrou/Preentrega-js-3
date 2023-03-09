const TASA_IMPUESTO = 0.65;
const MAXIMO_CARRITO = 5;
let valores = [];

function calculateimpuestoes(valor) {
    const impuesto = valor * TASA_IMPUESTO;
    const total = valor + impuesto;
    return { impuesto, total };
}

let keepGoing = true;
while (keepGoing) {
    const input = prompt("Ingresa el valor del producto para calcular los impuesto hasta un maximo de 5 items (para salir ingresa 'q'):");
    if (input === "q") {
        keepGoing = false;
    } else {
        const valor = Number(input);
        if (!isNaN(valor)) {
            const { impuesto, total } = calculateimpuestoes(valor);
            valores.push(total);
            if (valores.length > MAXIMO_CARRITO) {
                valores = valores.slice(-MAXIMO_CARRITO);
                keepGoing = false;
            }
            const totalCarrito = valores.reduce((acc, val) => acc + val, 0);
            const Carrito = valores.map((p, index) => `valor ${index + 1}: $${p.toFixed(2)}`).join("\n");
            const mensaje = `valor: $${valor.toFixed(2)} \nimpuesto: $${impuesto.toFixed(2)} \nTotal: $${total.toFixed(2)}\n\nvalor history:\n${Carrito}\n\nTotal history: $${totalCarrito.toFixed(2)}`;
            alert(mensaje);
            if (!keepGoing) {
                const mensajeFinal = `Agregaste el maximo de items (${MAXIMO_CARRITO})\nTotal de carrito: $${totalCarrito.toFixed(2)}`;
                alert(mensajeFinal);
            }
        } else {
            alert("Ingresa un valor correcto");
        }
    }
}

hola