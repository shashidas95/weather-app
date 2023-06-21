const locationInput = document.getElementById('locationInput');
const btn = document.getElementById('fetchWeatherBtn');

const name = document.querySelector('.name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');




btn.addEventListener('click', function () {
 const apiKey = '9fac0c6cf984a791dd4f893bed9e72ee';
 const locationInputValue = locationInput.value.trim();

 if (locationInputValue === '') {
  alert('Please enter a location.');
  return;
 }

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInputValue}&appid=${apiKey}`;

 fetch(url)
  .then(response => response.json())
  .then(data => {
   const nameValue = data['name']
   const tempValueKelvin = data['main']['temp']
   const tempValueCelsius = tempValueKelvin - 273.15;

   const descriptionValue = data['weather'][0]['description']
   const humidityValue = data['main']['humidity']

   name.innerHTML = nameValue
   temperature.innerHTML = `${tempValueCelsius.toFixed(2)} &#8451;`

   description.innerHTML = descriptionValue
   humidity.innerHTML = `${humidityValue} %`
  })
  .catch(err => alert('Something went wrong. Please try again.'));
});
