 // Function to convert Celsius to Fahrenheit
 function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    if (celsius !== "") {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('celsiusToFahrenheitResult').innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('celsiusToFahrenheitResult').innerHTML = "Please enter a valid number.";
    }
}

// Function to convert Fahrenheit to Celsius
function convertToCelsius() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit !== "") {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('fahrenheitToCelsiusResult').innerHTML = `${fahrenheit}°F is equal to ${celsius.toFixed(4)}°C`;
    } else {
        document.getElementById('fahrenheitToCelsiusResult').innerHTML = "Please enter a valid number.";
    }
}