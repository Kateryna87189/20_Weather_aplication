const apiKey = "b2010f7ad161f0cc422b4968956f6784";

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric



//element.onclick - дія, яка буде запущена при натисненні на кнопку
getWeatherButton.onclick = () => {
  //input.value значення написане всередині input
  const location = locationInput.value.trim();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((weather) => {
      const {
        name,
        main: { temp, feels_like, temp_min, temp_max, humidity },
        weather: [weatherDetails],
        wind: { speed },
      } = weather;
      //https://openweathermap.org/img/wn/10d@2x.png
      weatherContainer.innerHTML = `
           <h2>
           Місто: ${name} <img src = "https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png" alt = "${weatherDetails.icon} "/>         
           </h2> 
           <p>Температура: ${temp}°C</p> 
           <p>Відчувається як: ${feels_like}°C</p> 
           <p>Мінімальна температура: ${temp_min}°C</p> 
           <p>Максимальна температура: ${temp_max}°C</p> 
           <p>Вологість: ${humidity}%</p> 
           <p>Погода: ${weatherDetails.description}</p> 
           <p>Вітер: ${speed} м/с</p>
         `;
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Final"));
};
const arr = [1, 2, 3];//Кортеж (масив з вже відомою довжиною та елементами)
const [_, second, third] = arr;
//test