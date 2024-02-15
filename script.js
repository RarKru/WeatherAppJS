const apiKey="fc08b0f186149219ba22b3a0078e6d40";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();

    if(response.status==404){
        errorElement.style.display="block";
        weatherElement.style.display="none";
    }
    else{
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    let CurrWeather=data.weather[0].main;

    if (data.weather[0].main==`${CurrWeather}`){
        weatherIcon.src = `images/${CurrWeather}.png`;
    }

    weatherElement.style.display="block";
    errorElement.style.display="none";

}}


// Event listener for the search button
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// Event listener for the Enter key
searchBox.addEventListener("keydown", (e)=>{
    if(e.key==='Enter' || e.key==='Return'){
        e.preventDefault()
        checkWeather(searchBox.value);
    }
})
