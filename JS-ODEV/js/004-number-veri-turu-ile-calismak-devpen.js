let fiyat = 100
let kdvOrani = 0.18
let araToplam = fiyat * kdvOrani
let genelToplam = fiyat + araToplam
console.log(
    "Fiyat: ", fiyat + "\n",
    "K.D.V.: ", kdvOrani + "\n",
    "Ara Toplam: ", araToplam + "\n",
    "Genel Toplam: ", genelToplam + "\n")

let stringNumber = "7"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor içine bilgi gönderildi: ", Number("777"))

let counter = 777
counter = counter + 1
counter += 1
counter++;
console.log(counter)

counter--;
counter -= 1
console.log(counter)

counter *= 7
console.log(counter)

counter /= 7
console.log(counter)

console.log(77 % 7)

console.log("Koli filan: ", 11 % 2)

console.log(3 * 3 * 3 * 3)
console.log(3 ** 4)

console.log(Math.floor(1.9))
console.log(Math.ceil(1.9))
console.log(Math.round(2.5))
