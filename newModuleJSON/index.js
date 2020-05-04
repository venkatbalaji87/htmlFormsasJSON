const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag';

const API_KEY = 'b6424a03a63d3aa26330057e441192c6';

async function getDataFromAPI() {

  const response = await fetch(url);
  
  const data = await response.json();
  console.log(data);
  const a = [];
  a.push(data[0]);
  a.push(data[1]);
  a.push(data[2]);
  a.push(data[3]);
  a.push(data[5]);
console.log(a);
  a.forEach(countryCapital => 
{
        const Url_call = `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital.capital}&appid=${API_KEY}`;
        fetch(Url_call)
        .then(values => values.json())
        .then(testweather => {
            const container = document.getElementById("teamRowOne");
            const content = `
              <div class="card" style="width: 18rem;">
                  <img src=${countryCapital.flag} height="150" width="150" alt="name"  onclick='alert("Pressure :${testweather.main.pressure}" +"," + "Temp_min : ${testweather.main.temp_min}"+"," + "Temp_max: ${testweather.main.temp_max}"+"," +"Temprature: ${testweather.main.temp}"+"," + "Humidity : ${testweather.main.humidity}" )' />
                  <div class="card-body">
                  <h5>${countryCapital.name}</h5>
                  <p id="weatherID"> Pressure :${testweather.main.pressure} <br>
                   Temp_Min :${testweather.main.temp_min} <br>
                   Temp_max: ${testweather.main.temp_max} <br>
                   Temprature: ${testweather.main.temp} <br>
                   Humidity : ${testweather.main.humidity}</p>
                  </div>
              </div>
              `;
            container.innerHTML += content; 
    })
    .catch(console.error);
  })
}
getDataFromAPI();