function descargarArchivo(nombre: string, tiempo: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`📂 ${nombre} descargado en ${tiempo / 1000}s`), tiempo);
  });
}

const descarga1 = descargarArchivo("Archivo 1", 3000);
const descarga2 = descargarArchivo("Archivo 2", 5000);
const descarga3 = descargarArchivo("Archivo 3", 2000);

Promise.race([descarga1, descarga2, descarga3]).then((ganador) =>
  console.log(ganador + " (fue el primero en completarse)")
);
Promise.all([descarga1, descarga2, descarga3]).then(() =>
  console.log("Todas las descargas completadas")
);
