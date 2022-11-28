var myApi = "28635cc21461593ac623017059189851"
var weatherCityApi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=28635cc21461593ac623017059189851"
var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=28635cc21461593ac623017059189851"


var denverUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=28635cc21461593ac623017059189851"
function getDenver(denverUrl) {
    fetch(denverUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))

}
getDenver(denverUrl) 


// make click event for each city to display 5 day forecast Denver, Seattle, San fran, Orlando, New York, Chicago, Austin, and Atlanta 
//make click event to display 5 day forecast for searched city on search button click 
//id="citySearch"
// id="city-date"
//save previous data to local storage 
//get api data for any city not just denver
