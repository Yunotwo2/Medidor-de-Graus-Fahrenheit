function Converter() {
  var vE = document.getElementById("graus");
  var valor = vE.value;
  var valorEmCelsius = parseFloat(valor);
  var valorEmFahren = valorEmCelsius * (9 / 5) + 32;
  console.log(valorEmFahren);
  var grauConvertido;
  var gVaFinal = document.getElementById("grauConvertido");
  var grauConvertido = "O resultado é igual a: F° " + valorEmFahren;
  gVaFinal.innerHTML = grauConvertido;
}