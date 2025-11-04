"use strict";
async function procesarPedido() {
    console.log("Inicio del proceso");
    try {
        const paso1 = await tomarPedido();
        console.log(paso1);
        const paso2 = await prepararPedido();
        console.log(paso2);
        const paso3 = await entregarPedido();
        console.log(paso3);
        console.log("Fin del proceso");
    }
    catch (error) {
        console.error("Error en el proceso:", error);
    }
}
procesarPedido();
