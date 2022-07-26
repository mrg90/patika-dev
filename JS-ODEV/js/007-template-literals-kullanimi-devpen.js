let userName = "devpen"
const githubHesabi = "https://github.com/devpenn/patika-dev"

let bilgi = `Merhaba ${userName},
Websitemize hoşgeldiniz.
Github profilimize ${githubHesabi} adresinden ulaşbilrsiniz.
---
${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()} `
console.log(bilgi)