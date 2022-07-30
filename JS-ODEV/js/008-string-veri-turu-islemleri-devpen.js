let firstName = "Dev"
let lastName = "Pen"
let patika_profile = "https://app.patika.dev/devpen"
console.log(patika_profile.length)
console.log(firstName[0])
console.log(lastName.charAt(0))
firstName = firstName.toUpperCase()
console.log(firstName)
lastName = lastName.toLowerCase()
console.log(lastName)
console.log(patika_profile.search("devpen"))
console.log(patika_profile[11])
patika_profile.search('@')

let DOMAIN = patika_profile.slice(patika_profile.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.'))
)

patika_profile = patika_profile.replace('gmail.com', 'kodluyoruz.org')
console.log(patika_profile)

patika_profile.includes('dkfhsd') // false
patika_profile.includes('@') // true

console.log(
    patika_profile.endsWith('kodluyoruz.org')
)

firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)