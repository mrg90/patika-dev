/*let isActive = false
isActive = true
console.log(isActive)*/

let userName;
isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

userName = "kullanıcı"
console.log("Kullanıcı Adı: ", Boolean(userName))

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

Boolean(userName.length > 0) //true