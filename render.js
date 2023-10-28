let greetingName = document.querySelector('#greeting-name')

let usersName = localStorage.getItem('usersName')

greetingName.textContent = usersName