// link the other js file to customers2

// const moment = require("./moment")

// const moment = require("./moment")

// how do i get stuff on the page
console.log(customers)

// select element by using getElementById
const personDiv = document.getElementById('box')


for (let customers2 of customers) {
// picture -use the url info from the object
let srcURL = customers2.picture.medium
console.log("src is ", srcURL)
personDiv.innerHTML += `<img class= "person-img" src=${srcURL} />`
console.log(personDiv.innerHTML)
// Name
let firstName = customers2.name.first
let lastName = customers2.name.last
const h2El = document.createElement('h2')
const h2Text = document.createTextNode(firstName + ' ' + lastName)
h2El.appendChild(h2Text)
personDiv.appendChild(h2El)
// I think I may have to make this a div and inline it to make the names appear as one line
// email address
let email = customers2.email
const pEl = document.createElement('p')
const pText = document.createTextNode(email)
pEl.appendChild(pText)
personDiv.appendChild(pEl)
// address
let stNumAddress = customers2.location.street.number
let stNameAddress = customers2.location.street.name
let cityAddress = customers2.location.city
  let state2 = usStates[0]
let custState = customers2.location.state
let state = state2.abbreviation
let postal = customers2.location.postcode
const h4El = document.createElement('h4')
const h4Text = document.createTextNode(stNumAddress + ' ' + stNameAddress + ' ' + cityAddress + ', ' + custState + ' ' + postal)
h4El.appendChild(h4Text)
personDiv.appendChild(h4El)
// state
console.log(usStates)

// DOB
let bday = moment(customers2.dob.date).format("MMM Do YY");
let dob = 'DOB: ' + bday
const h5El = document.createElement('h5')
const h5Text = document.createTextNode(dob)
h5El.appendChild(h5Text)
personDiv.appendChild(h5El)
// customer since
let register = moment(customers2.registered.date).format("MMM Do YY")
let registered = "Customer since: " + register
// loop through each object and create chunk on the page with all the data that we want

function nameToAbbr (stateName) {
  const idx = usStates.findIndex(function (state) {
    return state.name === stateName.toUpperCase()
  })

  if (idx === -1) {
    return null
  }

  return usStates[idx].abbreviation
}


}
