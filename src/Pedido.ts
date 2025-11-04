function tomarPedido(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pedido recibido"), 1000);
  });
}

function prepararPedido(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject("Error: Falló la preparación del pedido");
      } else {
        resolve("Pedido en preparación");
      }
    }, 2000);
  });
}

function entregarPedido(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pedido entregado al cliente"), 1500);
  });
}
tomarPedido()
  .then((msg) => {
    console.log(msg);
    return prepararPedido();
  })
  .then((msg) => {
    console.log(msg);
    return entregarPedido();
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));