
const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag';

const API_KEY = 'fbb74e6345a28c3db94c3d5f5b4d99c0';


async function getDataFromAPI() {

  const response = await fetch(url);
  
  const data = await response.json();

  const result = data.map(countryCapital => ({capital: countryCapital.capital}));

    for(let values=0;values<data.length;values++) {

        const Url_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result[values].capital}&appid=${API_KEY}`);

        fetch(Url_call).then(values => values.json()).then(testweather => {
            const container = document.getElementById("teamRowOne");

            data.forEach(resultData => {
          
            const content = `
              <div class="card" style="width: 18rem;">
                  <a href="#"><img src=${resultData.flag} height="150" width="150" alt="name"></a>
                  <div class="card-body">
                  <h5>${resultData.name}</h5>
                  <p> ${testweather.main.pressure}</p>
                  </div>
              </div>
              `;
            container.innerHTML += content; 
        })
    })
 }

}

// const container = document.getElementById("teamRowOne");

//   data.forEach(resultData => {

//   const content = `
//     <div class="card" style="width: 18rem;">
//         <a href="#"><img src=${resultData.flag} height="150" width="150" alt="name"></a>
//         <div class="card-body">
//         <h5>${resultData.name}</h5>
//         </div>
//     </div>
//     `;
//   container.innerHTML += content;
// });

// }


getDataFromAPI();







// function wapi(result){
// console.log(result);
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+result+'&appid=${API_KEY}')
// .then(response => response.json().then(wapi =>{
//     if(wapi.main!=undefined){
//         return wapi.json();
//     }
//     else{
//         alert(wapi.message);
//     }
    
// }))
 
