var myApi = "28635cc21461593ac623017059189851"
var weatherCityApi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=28635cc21461593ac623017059189851"
var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=28635cc21461593ac623017059189851"

var searchBtnEl = document.querySelector(".searchBtn")
var forecastContainerEl = document.querySelector(".container text-center")



// make click event for each city to display 5 day forecast Denver, Seattle, San fran, Orlando, New York, Chicago, Austin, and Atlanta 
//make click event to display 5 day forecast for searched city on search button click 
//id="citySearch"
// id="city-date"
//save previous data to local storage 
//get api data for any city not just denver


//get cities
var getCity = function (city) {
    var cityName = document.querySelector(".date-1")
    var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=28635cc21461593ac623017059189851"
    fetch(forecastApi)
        .then(function(response) {
            response.json().then(function(data) {
                displayCities(data, city)
            })
        })
}



//get 5 day forecast
//function to display cities on search btn click
// var buttonClickFunction = function (e) {
//     var forecast = e.target.getAttribute("data-weather")
//     if (forecast) {
//         getCity(forecast)
//         forecastContainerEl.textContent = " "

//     }
// }
//search button click
searchBtnEl.addEventListener('click', buttonClickFunction)

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
// //get city data for 5 day forecast. for loop for 5 days 
fetch("https://api.openweathermap.org/data/2.5/forecast?q='+searchCity.value+'&appid=28635cc21461593ac623017059189851")
.then((response) => response.json())
.then((data) => {
    for(i=0;i<5;i++) {
        var { city } = data
        var { icon, description} = data.weather
        var { temp, humidity} = data.main
        var { speed } = data.wind
//         
//         //list.main.temp, list.temp.humidity, list.weather.icon & list.weather.description, list.wind, list.dt = date
    }
})
