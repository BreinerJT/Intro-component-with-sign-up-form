const form = document.querySelector(".js-form")
const inputs = document.querySelectorAll(".js-input")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    inputs.forEach(input => {
        let value = input.value
        let inputID = input.getAttribute("id")
        if(value !== ""){
            if(inputID == "first-name") validateName(input)
            if(inputID == "last-name")  validateLastName(input)
            if(inputID == "email") validateEmail(input)
            if(inputID == "password") validatePassword(input)
        } 
        else invalidInput(input)
    })
})

function validateName(input){
    let value = input.value
    let label = input.nextElementSibling
    const rgx = /^[a-zA-Z]+$/i
    const namesStatus = rgx.test(value)
    if(namesStatus) correctInput(input)
    else {
        label.textContent  = "Please insert a valid name."
        invalidInput(input)
    }
}

function validateLastName(input){
    let value = input.value
    let label = input.nextElementSibling
    const rgx = /^[a-zA-Z]+$/i
    const namesStatus = rgx.test(value)
    if(namesStatus) correctInput(input)
    else {
        label.textContent  = "Please insert a valid last name."
        invalidInput(input)
    }
}

function validateEmail(input){
    let value = input.value
    let rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    const emailStatus = value.match(rgx)

    if( !emailStatus ) invalidInput(input)
    else correctInput(input)
}

function validatePassword(input){
    let value = input.value
    let label = input.nextElementSibling
    const rgx = /^[A-Za-z]\w/i
    const passwordStatus = rgx.test(value)

    if (passwordStatus) correctInput(input)
    else{
        label.textContent  = "The password must contain only alphanumeric characters"
        invalidInput(input)
    }
    if(value.length < 8 || value.length > 15){
        label.textContent  = "The password must contain between 8 and 15 characters"
        invalidInput(input)
    }
}


function invalidInput(input){
        let label = input.nextElementSibling
        let warn = input.nextElementSibling.nextElementSibling

        input.classList.remove("correct")
        input.classList.add("wrong")
        label.classList.remove("hide")
        warn.classList.remove("hide")

        setTimeout(() => {
            label.classList.add("hide")
            warn.classList.add("hide")
        }, 2000)
}
function correctInput(input){
    input.classList.add("correct")
    input.classList.remove("wrong")
}
