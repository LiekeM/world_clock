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

updateTime();
setInterval(updateTime, 1000);
