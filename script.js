function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius").value;

    if (celsiusInput === "") {
        alert("Please enter a temperature in Celsius");
        return;
    }

    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").innerHTML = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit";
}
