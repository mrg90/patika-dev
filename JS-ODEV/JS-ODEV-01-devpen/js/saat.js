let myName = prompt('Adınız: ')
let info = document.querySelector("#myName")
info.innerHTML = `${myName}`

function zamaniGoster() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + ": " + gunler[today.getDay()];
    setTimeout(zamaniGoster, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
zamaniGoster()