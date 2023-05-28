let temperature = document.querySelector("#temperature").textContent;
let wspeed = document.querySelector("#windspeed").textContent;

if (temperature <= 50 && wspeed > 3){
    let windchill = 35.74 + (.6215 * temperature) - (35.75 * (wspeed ** .16)) + (.4275 * temperature * (speed ** .16));
    document.querySelector("#wchill").innerHTML = Math.round(windchill);
}
else {
    let windchill = "N/A";
    document.querySelector("#wchill").innerHTML = windchill;
}