// let month = [
//   "January",
//   "February",
//   "March",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "octobr",
//   "november",
//   "december",
// ];

// let days = [
//   "saturday",
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
// ];

const inputElem = document.querySelector("input");

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "63a9edc633f61fe147fad0de5b778701",
};

function fetchData() {
  let cityValue = inputElem.value;

  fetch(`${apiData.url}${cityValue}&&appid=${apiData.key}`).then((res) =>
    res.json().then((data) => console.log(data))
  );
}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
