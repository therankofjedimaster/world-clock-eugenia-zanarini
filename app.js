function updateLATime() {
    let losangeles = document.querySelector("#losangeles");
    if (losangeles) {
        let losangelesHour = losangeles.querySelector(".time");
        let losangelesDay = losangeles.querySelector(".date");
        let losangelesTime = moment().tz("America/Los_Angeles");
        losangelesHour.innerHTML = losangelesTime.format("HH:mm:ss");
        losangelesDay.innerHTML = losangelesTime.format("dddd, MMMM D, YYYY");
    }
}
setInterval(updateLATime, 1000);

function updateRosarioTime() {
    let rosario = document.querySelector("#rosario");
    if (rosario) {
        let rosarioHour = rosario.querySelector(".time");
        let rosarioDay = rosario.querySelector(".date");
        let rosarioTime = moment().tz("America/Rosario");
        rosarioHour.innerHTML = rosarioTime.format("HH:mm:ss");
        rosarioDay.innerHTML = rosarioTime.format("dddd, MMMM D, YYYY");
    }
}
setInterval(updateRosarioTime, 1000);

function updateDublinTime() {
    let dublin = document.querySelector("#dublin");
    if (dublin) {
        let dublinHour = dublin.querySelector(".time");
        let dublinDay = dublin.querySelector(".date");
        let dublinTime = moment().tz("Europe/Dublin");
        dublinHour.innerHTML = dublinTime.format("HH:mm:ss");
        dublinDay.innerHTML = dublinTime.format("dddd, MMMM D, YYYY");
    }
}
setInterval(updateDublinTime, 1000);

function updateIstanbulTime() {
    let istanbul = document.querySelector("#istanbul");
    if (istanbul) {
        let istanbulHour = istanbul.querySelector(".time");
        let istanbulDay = istanbul.querySelector(".date");
        let istanbulTime = moment().tz("Asia/Istanbul");
        istanbulHour.innerHTML = istanbulTime.format("HH:mm:ss");
        istanbulDay.innerHTML = istanbulTime.format("dddd, MMMM D, YYYY");
    }
}
setInterval(updateIstanbulTime, 1000);

function updateTokyoTime() {
    let tokyo = document.querySelector("#tokyo");
    if (tokyo) {
        let tokyoHour = tokyo.querySelector(".time");
        let tokyoDay = tokyo.querySelector(".date");
        let tokyoTime = moment().tz("Asia/Tokyo");
        tokyoHour.innerHTML = tokyoTime.format("HH:mm:ss");
        tokyoDay.innerHTML = tokyoTime.format("dddd, MMMM D, YYYY");
    }
}
setInterval(updateTokyoTime, 1000);

function updateCity(event) {
    let timezone = event.target.value;
    if (timezone === "current") {
        timezone = moment.tz.guess();
    }
    let cityName = timezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timezone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
                </div>
                <div>
                    <div class="time">${cityTime.format("HH:MM:ss")}</div>
                </div>
            </div>
            <a class="homepage" href="index.html">Back to homepage</a>
    `;
}
setInterval(updateCity, 1000);

let timezoneChange = document.querySelector("#city");
timezoneChange.addEventListener("change", updateCity);