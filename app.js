function updateLATime() {
    let losangeles = document.querySelector("#losangeles");
    let losangelesHour = losangeles.querySelector(".time");
    let losangelesDay = losangeles.querySelector(".date");
    let losangelesTime = moment().tz("America/Los_Angeles");
    losangelesHour.innerHTML = losangelesTime.format("HH:MM:ss");
    losangelesDay.innerHTML = losangelesTime.format("dddd, MMMM D, YYYY");
}
setInterval(updateLATime, 1000);

function updateDublinTime() {
    let dublin = document.querySelector("#dublin");
    let dublinHour = dublin.querySelector(".time");
    let dublinDay = dublin.querySelector(".date");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinHour.innerHTML = dublinTime.format("HH:MM:ss");
    dublinDay.innerHTML = dublinTime.format("dddd, MMMM D, YYYY");
}
setInterval(updateDublinTime, 1000);

function updateTokyoTime() {
    let tokyo = document.querySelector("#tokyo");
    let tokyoHour = tokyo.querySelector(".time");
    let tokyoDay = tokyo.querySelector(".date");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoHour.innerHTML = tokyoTime.format("HH:MM:ss");
    tokyoDay.innerHTML = tokyoTime.format("dddd, MMMM D, YYYY");
}
setInterval(updateTokyoTime, 1000);