"use strict";
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Cargando datos del servidor");
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Datos cargados correctamente");
            }
            else {
                reject("Error al cargar los datos");
            }
        }, 2000);
    });
}
fetchData()
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
