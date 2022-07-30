let username = prompt("Kullanıcı adınızı giriniz:")
let age = prompt("Yaşınızı giriniz:")
let info = document.querySelector("#p01")

if (username.length > 0 && age >= 18) {
    console.log(`Hoşgeldiniz, ${username} - ${age} (ehliyet alabiirsiniz)`)
}
else if (!(username)) {
    console.log("Hatalı giriş yaptınız")
}
else if (!(age > 18)) {
    console.log("Ehliyet alamazsınız")
}
info.innerHTML = `${username ? username : "Falan filan"}`