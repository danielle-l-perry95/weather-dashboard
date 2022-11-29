var myApi = "28635cc21461593ac623017059189851"
var weatherCityApi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=28635cc21461593ac623017059189851"
var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=28635cc21461593ac623017059189851"

var searchBtnEl = document.querySelector(".searchBtn")
var forecastContainerEl = document.querySelector(".container text-center")



// make click event for each city to display 5 day forecast Denver, Seattle, San fran, Orlando, New York, Chicago, Austin, and Atlanta 
//make click event to display 5 day forecast for searched city on search button click 

//get cities
var getCity = function (city) {
    //update the city name in the dom
    var cityName = document.querySelector(".date-1")
    cityName.innerHTML = city 
    //get the city 
    var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=28635cc21461593ac623017059189851"
    fetch(forecastApi)
        .then(function(response) {
            response.json().then(function(data) {
                displayCities(data, city)
            })
        })
}
var getForecast = function (data) {
fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=28635cc21461593ac623017059189851") 
    .then((response) => response.json())
    .then((data) => {
        for(i=0;i<5;i++) {
            document.getElementById("day" +  (i+1) + "date").innerHTML = "date:" + Number(data.list.dt)
            document.getElementById("day" +  (i+1) + "temp").innerHTML = "temp:" + Number(data.list.main.temp) + "°F"
            document.getElementById("day" +  (i+1) + "humidity").innerHTML = "humidity:" + Number(data.list.main.humidity) + "%"
            document.getElementById("day" +  (i+1) + "icon").innerHTML = "icon:" + Number(data.list.weather)
            document.getElementById("day" +  (i+1) + "wind").innerHTML = "wind:" + Number(data.list.wind) + "mph"

        }
    }
    )}




//search button click
//searchBtnEl.addEventListener('click', buttonClickFunction)

// var denverUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=28635cc21461593ac623017059189851"
// function getDenver(denverUrl) {
//     fetch(denverUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// }
// getDenver(denverUrl) 

// function userCity() {
//     var searchCity = $('#citySearch')
//     var cityDate = $('#city-date')
//     cityDate.innerHTML = "--" +searchCity.value+ "--"
// }
