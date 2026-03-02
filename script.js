const botonAplicar = document.getElementById("btn-aplicar");
const inputRpm = document.getElementById("input-rpm");

botonAplicar.addEventListener("click", function () {
  console.log("Ajustando velocidad a: " + inputRpm.value + " RPM");
});
