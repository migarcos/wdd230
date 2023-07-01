// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
const idVisits = document.querySelector("#days");

let lastVisit = localStorage.getItem('lastVisit');
let priorVisit = localStorage.getItem('priorVisit');;
let pastdays;
console.log(lastVisit);

let elapsedDays = (Date.now() - lastVisit) / msToDays;
console.log("elapsed "+elapsedDays);
pastdays = (lastVisit - priorVisit) / msToDays;
console.log("pased " +  pastdays);

if (lastVisit == null || pastdays < 1) { // elapsedDays.toFixed(0) == 0
  console.log("Welcome this first time");
  idVisits.innerHTML = "Welcome this first time";
  localStorage.setItem("lastVisit", Date.now());
  lastVisit = localStorage.getItem('lastVisit');
  localStorage.setItem("priorVisit", lastVisit);
} else {
  if (elapsedDays >= 1 ){ //&& pastdays < 0
    console.log("Welcome again after ", elapsedDays.toFixed(0) ," days");
    idVisits.innerHTML = "Welcome again after "+elapsedDays.toFixed(0)+" days";
    if ( pastdays > 1) {
        localStorage.setItem("lastVisit", Date.now());
        localStorage.setItem("priorVisit", lastVisit);
    }
        
    // priorVisit = localStorage.setItem("priorVisit", lastVisit);
  } else {
    idVisits.innerHTML = "Welcome again after "+ pastdays.toFixed(0) +" days";
  }
}


console.log(elapsedDays.toFixed(0));