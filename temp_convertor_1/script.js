function tempCon() {
    const val = document.getElementById("input_value").value;
    const result = document.getElementById("result");
    const input = document.getElementById("input").value;
    const output = document.getElementById("output").value;

    const inputVal = parseFloat(val);
    if (isNaN(inputVal)) {
        result.value = "Please enter a valid number";
        return;
    }

    let converted;

    // Celsius
    if (input === "celcius") {
        if (output === "Fahrenheit") {
            converted = (inputVal * 9 / 5) + 32;
        } else if (output === "Kelvin") {
            converted = inputVal + 273.15;
        } else {
            converted = inputVal;
        }
    }

    // Fahrenheit
    else if (input === "Fahrenheit") {
        if (output === "celcius") {
            converted = (inputVal - 32) * 5 / 9;
        } else if (output === "Kelvin") {
            converted = ((inputVal - 32) * 5 / 9) + 273.15;
        } else {
            converted = inputVal;
        }
    }

    // Kelvin
    else if (input === "Kelvin") {
        if (output === "celcius") {
            converted = inputVal - 273.15;
        } else if (output === "Fahrenheit") {
            converted = ((inputVal - 273.15) * 9 / 5) + 32;
        } else {
            converted = inputVal;
        }
    }

    result.value = converted.toFixed(2);
}

function reset() {
    document.getElementById("input_value").value = "";
    document.getElementById("result").value = "";
    document.getElementById("input").selectedIndex = 0;
    document.getElementById("output").selectedIndex = 0;
}
