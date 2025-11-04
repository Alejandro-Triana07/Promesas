async function procesarPedidoConNombre(nombre: string): Promise<string> {
  console.log(`🛒 Iniciando ${nombre}`);
  try {
    const paso1 = await tomarPedido();
    console.log(`${nombre}: ${paso1}`);

    const paso2 = await prepararPedido();
    console.log(`${nombre}: ${paso2}`);

    const paso3 = await entregarPedido();
    console.log(`${nombre}: ${paso3}`);

    console.log(`${nombre} completado`);
    return `${nombre} entregado`;
  } catch (error) {
    throw new Error(`${nombre} fallo (${error})`);
  }
}

Promise.allSettled([
  procesarPedidoConNombre("Pedido 1"),
  procesarPedidoConNombre("Pedido 2"),
  procesarPedidoConNombre("Pedido 3"),
]).then((resultados) => {
  console.log("Resultados finales:");
  resultados.forEach((r, i) => {
    if (r.status === "fulfilled") {
      console.log(`Pedido ${i + 1}: ${r.value}`);
    } else {
      console.log(`Pedido ${i + 1}: ${r.reason}`);
    }
  });
  console.log("Todos los pedidos procesados.");
});