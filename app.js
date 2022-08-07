const inputElem = document.querySelector("input");

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "63a9edc633f61fe147fad0de5b778701",
};

function fetchData() {
  let cityValue = inputElem.value;

  fetch(`${apiData.url}${cityValue}&&appid=${apiData.key}`).then((res) =>
    res.json().then((data) => {
      console.log(data);

      showData(data);
    })
  );
}

function showData(data) {
  let cityElem = document.querySelector(".city");
  cityElem.innerHTML = `${data.name}, ${data.sys.country}`;

  let tempElem = document.querySelector(".temp");
  tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;

  let tempsElem = document.querySelector(".hi-low");
  tempsElem.innerHTML = `${Math.floor(
    data.main.temp_min - 273.15
  )}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;

  let weatherElem = document.querySelector(".weather");
  weatherElem.innerHTML = `${data.weather[0].main}`;

  let dateElem = document.querySelector(".date");
  dateElem.innerHTML = showDate();
}

function showDate() {
  let months = [
    "January",
    "February",
    "March",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "octobr",
    "november",
    "december",
  ];

  let days = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];

  let now = new Date();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  return `${day} ${date} ${month} ${year}`;
}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
