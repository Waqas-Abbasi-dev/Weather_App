
        const apiKey = "c0ee9db5b859bd768b4d22ed53d1db3a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector('.search input')
        const searchBtn = document.querySelector('.search button')
        const weatherIcon = document.querySelector('.weather-icon');

        async function checkWeather(city){
          const response = await fetch(apiUrl + city + `&appid=${apiKey}`);  
          if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
          }

          else{
                let data = await response.json();
         
                 document.querySelector('.city').innerHTML = data.name;
                 document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
                 document.querySelector('.humidity-p').innerHTML = data.main.humidity +"%";
                 document.querySelector('.wind-p').innerHTML = data.wind.speed + " km/h";

                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "image/weather.png";
                }
                else if(data.weather[0].main == "Clear"){
                     weatherIcon.src = "image/sunny.png";
                 }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "image/rainy.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                     weatherIcon.src = "image/snowy.png";
                }
                else if(data.weather[0].main == "Smoke"){
                     weatherIcon.src = "image/fog.png";
                }

                document.querySelector('.weather').style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
          
        }
       
        searchBtn.addEventListener('click', ()=>{
            checkWeather(searchBox.value);
        });

