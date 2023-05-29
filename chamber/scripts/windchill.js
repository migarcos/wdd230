// may 2023
let gradesC = document.getElementById("temperature").textContent;
let wspeed = document.getElementById("wspeed").textContent;
let gradesF = (gradesC * 9 / 5) + 32;
let windchill = 0;
wspeed = wspeed / 1.609;

if (gradesF <= 50 && wspeed > 3){ 
    windchill = 35.74 + (.6215 * gradesF) - (35.75 * (wspeed ** .16)) + (.4275 * gradesF * (wspeed ** .16));
    document.getElementById("wchill").innerHTML = Math.round(windchill); //Math.round(windchill)
}
else {
    windchill = "N/A";
    document.getElementById("wchill").innerHTML = windchill;
}