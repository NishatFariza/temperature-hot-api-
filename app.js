const API_KEY =`809ca66f72add7a91d304a0bf7f93332`;
const searchCity = document.getElementById('search-city')

const searchTemperature =() =>{
   const searchCityValue =searchCity.value;
   const temperatureUrl =`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${searchCityValue}&appid=${API_key}`
   console.log(temperatureUrl)
}