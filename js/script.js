function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}


// let F = 76
// let C = (F -= 32)/1.8
// if  (F = 76){
//   console.log(F + " degrees Fahrenheit is " + C + " degrees Celsius!")
// }

