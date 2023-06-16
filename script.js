async function showWeather(){

const weatherAPI =
    "http://api.weatherapi.com/v1/current.json?key=7e71b6f8993649078d1145132220906&aqi=no";
    try { 
    const keyword = document.querySelector("#inputSearch");
    const btnSubmit = document.querySelector("#btnSubmit");
    const container = document.getElementById("details");
    btnSubmit.onclick = () => {
        fetch(`${weatherAPI}&q=${keyword.value}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let element = "";
    
                element = showElement(data);
    
                container.innerHTML = element;
            });
    };

    function showElement(data) {
        return `<h2>City : ${data.location.name}</h2>
        <h3>Region : ${data.location.region}</h5>
        <h3>Country : ${data.location.country}</h5>
        
        <p>Condition : ${data.current.condition.text}</p>
        <div class="box">
            <img src="https:${data.current.condition.icon}" alt="">
            <p>Temperature ℃ : ${data.current.temp_c} ℃</p>
        </div>
        <p>Wind Speed : ${data.current.wind_kph}km/h</p>
        <p>Last Update : ${data.current.last_updated}</p>`;   
    }   

   
    } catch (error) {
        console.error(error);
    }
    
}