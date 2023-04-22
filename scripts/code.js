// https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified
let dayData = new Date(document.lastModified);

let fulldate = `${dayData.getMonth()+1}/${dayData.getDate()}/${dayData.getFullYear()}`;
let hourDate = `${dayData.getHours()}:${('0'+ dayData.getMinutes()).slice(-2)}:${('0'+ dayData.getSeconds()).slice(-2)}`
let otherDate = `${fulldate} ${hourDate}`;

document.querySelector('#copyYear').innerHTML = dayData.getFullYear();
document.getElementById('lastUpdate').innerHTML = otherDate;