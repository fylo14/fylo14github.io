// mostrar.js
function mostrarHistoria() {
    var historiaElement = document.getElementById("historia");

    var historia = "El Ford Mustang es un icónico automóvil deportivo producido por Ford desde 1964. " +
               "Fue diseñado como un automóvil asequible y deportivo para el mercado masivo. " +
               "El Mustang se convirtió en un éxito instantáneo y un ícono cultural, " +
               "definiendo el concepto de 'pony car'. Ha pasado por varias generaciones " +
               "y ha evolucionado en diseño y rendimiento a lo largo de los años. Como dato extra " +
               "durante la década de 1970, los fabricantes siempre estuvieron a la caza de soluciones " + 
               "para lograr el mínimo consumo de combustible y es así como se comenzó a trabajar " + 
               "con materiales como plástico, aluminio y defensas de uretano. Lo cual dió paso " + 
               "a un modelo más pequeño y menos consumidor con motor de 4 cilindros.";

    historiaElement.textContent = historia;
}
