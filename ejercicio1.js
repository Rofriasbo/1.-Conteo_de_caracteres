// 1. Conteo de caracteres
function contarCaracteres(cadena) {
    // Eliminar espacios y caracteres especiales antes de contar
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '');
    return cadenaLimpia.length;
}
console.log(contarCaracteres("Finlandia!")); // Output: 9