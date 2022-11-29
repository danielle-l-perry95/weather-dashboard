var myApi = "28635cc21461593ac623017059189851"
var weatherCityApi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=28635cc21461593ac623017059189851"
var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=28635cc21461593ac623017059189851"

var searchBtnEl = document.querySelector(".searchBtn")
var forecastContainerEl = document.querySelector(".container text-center")

//Define day in moment.js 
day = moment().format('MMMM Do YYYY, h:mm:ss a');


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




//5 day forecast 
var getForecast = " "
//fix parenthesis 
data.forEach(this.(day, i) => {
    if (i > 0 &&  i <= 5) {
        getForecast += `
        <div id="date-1" class="col day">
        ${data.list.dt}
        <ul>
            <li id="icon-1" class="icon">${data.list.weather.icon}</li>
            <li id="temp-1" class="temp">Temp:${data.list.main.temp}°F</li>
            <li id="wind-speed-1" class="wind">Wind:${data.list.wind[0]}</li>
            <li id="humidity-1" class="humidity">Humidity:${data.list.main.humidity}</li>
        </ul>
      </div>
        
        `
    }
})
forecastContainerEl.innerHTML = getForecast

//save data to local storage. 

// var getForecast = function (data) {
// fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=28635cc21461593ac623017059189851") 
//     .then((response) => response.json())
//     .then((data) => {
//         for(i=0;i<5;i++) {
//             document.getElementById("day" +  (i+1) + "date").innerHTML = "date:" + Number(data.list.dt)
//             document.getElementById("day" +  (i+1) + "temp").innerHTML = "temp:" + Number(data.list.main.temp) + "°F"
//             document.getElementById("day" +  (i+1) + "humidity").innerHTML = "humidity:" + Number(data.list.main.humidity) + "%"
//             document.getElementById("day" +  (i+1) + "icon").innerHTML = "icon:" + Number(data.list.weather)
//             document.getElementById("day" +  (i+1) + "wind").innerHTML = "wind:" + Number(data.list.wind) + "mph"

//         }
//     }
//     )}



//make click event to display 5 day forecast for searched city on search button click 
//search button click
//define buttonClickFunction 
searchBtnEl.addEventListener('click', buttonClickFunction)



