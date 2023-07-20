const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const whumidity    = document.querySelector('#w-humidity');

// const windChill   = document.querySelector('#wind-chill');
// const tempF       = document.querySelector('#tempF')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.13838782087784&lon=-117.29249460363037&units=metric&APPID=304bd79805455271dee8a32fb547d4ed';
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.13838782087784&lon=-117.29249460363037&units=metric&APPID=304bd79805455271dee8a32fb547d4ed';

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // windSpeed.innerHTML = `<strong>${weatherData.wind.speed} km/h</strong>`;
    // windChillCalc(weatherData.main.temp, weatherData.wind.speed);
    
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '100px');
    captionDesc.textContent = desc;
    captionDesc.style.textTransform = "capitalize";
    whumidity.textContent = humidity;
}
function displayResults2(forecastData) {
    day1 = forecastData.list[1].main.temp.toFixed(0);
    day2 = forecastData.list[2].main.temp.toFixed(0);
    day3 = forecastData.list[3].main.temp.toFixed(0);

    document.querySelector("#temp1").innerHTML  = day1;
    document.querySelector("#temp2").innerHTML  = day2;
    document.querySelector("#temp3").innerHTML  = day3;

}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
async function apiFetch2() {
    try {
      const response = await fetch(forecast);
      if (response.ok) {
        const data2 = await response.json();
        console.log(data2); // this is for testing the call
        displayResults2(data2);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
function displayday(day){
  if (day > 6){
    day -= 7;
  }
  switch(day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
}}
now= new Date();

document.querySelector("#date1").innerHTML = displayday(now.getDay() + 1);
document.querySelector("#date2").innerHTML = displayday(now.getDay() + 2);
document.querySelector("#date3").innerHTML = displayday(now.getDay() + 3);



apiFetch();
apiFetch2();