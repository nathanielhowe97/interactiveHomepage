let edit = document.querySelector('#edit')
let save = document.querySelector('#save')
let settings = document.querySelector('#account-settings')
let confirm = document.querySelector('#confirm')
let editName = document.querySelector('#editName')

const settingsWrapper = document.querySelector('.settings-wrapper')
const transition = document.querySelector('#transition')

const welcome = document.querySelector('#welcome')
const greetingText = document.querySelector('#greeting-text')
const greeting = document.querySelector('#greeting')
const logIn = document.querySelector('#log-in-wrapper')

usersName = localStorage.getItem('usersName')

const inputName = document.querySelector('#fname')
const inputEmail = document.querySelector('#email')
const submit = document.querySelector('#submit')

let body = document.querySelector('#body')

const DOMElements = document.querySelectorAll("p, div, main, article, header, nav, button, a, img, section");

function check(){
    if (settingsWrapper.style.display === "none"){
        body.style.overflow = "auto"
        DOMElements.style.overflow = "auto"
        
    } else{
        body.style.overflow = "hidden"
        DOMElements.style.overflow = "hidden"
    }    
}


if (usersName){
    welcome.style.display = "flex"
    logIn.style.display = "none"
} else{
    logIn.style.display = "flex"
    transition.style.display = "block"
}

if (!greetingName.textContent){
    greetingName.textContent += "user"
}

submit.addEventListener('click', function(){
    if (inputName.value === "" || inputEmail.value === "" || inputEmail.value && inputEmail.value === ""){
        alert('You must fill out all form fields')
    }   else{

        let usersName = localStorage.setItem('usersName', inputName.value)
        localStorage.setItem('usersEmail', inputEmail.value)
        greetingName.textContent = usersName

        location.reload()

        logIn.style.display = "none"
        // transition.style.display = "none"

    }
})

settings.addEventListener('click', function(){
    editName.value = usersName

    editName.style.display = "block"

    settingsWrapper.style.display = "flex"
    confirm.style.display = "block"
    settings.style.display = "none"

    check()
})

edit.addEventListener('click', function(){  
    editName.removeAttribute('disabled')
    editName.select()
    edit.style.display = "none"
    save.style.display = "block"

    check()
})

save.addEventListener('click', function(){
    let newName = editName.value
    localStorage.setItem('usersName', newName)

    edit.style.display = "block"
    save.style.display = "none"

    editName.setAttribute('disabled', "")
    check()
})

confirm.addEventListener('click', function(){
    edit.style.display = "block"
    save.style.display = "none"

    location.reload()
    transition.style.display = "flex"

    check()

    setTimeout(() => {
        settingsWrapper.style.display = "none"
        confirm.style.display = "none"
        settings.style.display = "block"
        greeting.style.opacity = "100%"

        transition.style.display = "none"

    }, 500);
})

window.addEventListener('load', function(){
    transition.style.display = "none"
})
