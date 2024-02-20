const container = document.querySelector('.container');
const search = document.querySelector('.search-bar button');
const weatherDetails = document.querySelector('.weather-details');
const weatherBox = document.querySelector('.weather-box');

search.addEventListener('click', ()=> {
    const APIKey = '98deda7e5f1f9bf31cdd2a12228dc558';
    const city = document.querySelector('.city').value;

    if(city == '')
      return;

    console.log(city);
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=98deda7e5f1f9bf31cdd2a12228dc558').then(response => response.json()).then(json => {
        
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const wind = document.querySelector('.weather-details .wind span');
        const humidity = document.querySelector('.weather-details .humidity span');
       
        console.log(json.weather[0].main);
        
       
        switch(json.weather[0].main) {

            case 'Clear' : 
                image.src = 'images/clear.png';
                break;
            
            case 'Rain' : 
                image.src = 'images/rain.png';
                break;

            case 'Clouds' : 
                image.src = 'images/cloud.png';
                break;

            case 'Snow' : 
                image.src = 'images/snow.png';
                break;

            case 'Mist' : 
                image.src = 'images/mist.png';
                break;

            case 'Haze' : 
                image.src = 'images/mist.png';
                break;

            default : image.src= 'images/rain.png'
        }

        
        temperature.innerHTML = parseInt(json.main.temp) + '<span>°C</span>';
        description.innerHTML = json.weather[0].description;
        humidity.innerHTML = json.main.humidity;
        wind.innerHTML = parseInt(json.wind.speed)+ 'Km/h';


    });
});