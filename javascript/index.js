function updateTime() {
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");
  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd[, ] MMMM Do YYYY");
  saoPauloTimeElement.innerHTML = saoPauloTime.format("HH:mm:ss");

  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  amsterdamDateElement.innerHTML = amsterdamTime.format(
    "dddd[, ] MMMM Do YYYY"
  );
  amsterdamTimeElement.innerHTML = amsterdamTime.format("HH:mm:ss");

  let jerusalemElement = document.querySelector("#jerusalem");
  let jerusalemDateElement = jerusalemElement.querySelector(".date");
  let jerusalemTimeElement = jerusalemElement.querySelector(".time");
  let jerusalemTime = moment().tz("Asia/Jerusalem");
  jerusalemDateElement.innerHTML = jerusalemTime.format(
    "dddd[, ] MMMM Do YYYY"
  );
  jerusalemTimeElement.innerHTML = jerusalemTime.format("HH:mm:ss");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd[, ] MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  clearInterval(idInterval);
  idInterval = setInterval(setCityTime, 1000, cityName, cityTimeZone);
}

function setCityTime(cityName, cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd[, ] MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        </br>
        </br>
    <a href="index.html">All cities</a>
    </br>
    </br>
    `;
}

updateTime();
let idInterval = setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement = addEventListener("change", updateCity);
