
const BASE_URL = "http://localhost:3000"

const signup =  (username, email, password) => {
    const body = {username, email, password}
    fetch(BASE_URL+'/register', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    })
    .then( async (response) => {
        const output = await response.json();
        console.log("THe sign up output is ", output)
    })
    .catch((err) => {
        console.log("The error is ", err)
    })
}

const login =  (username, password) => {
    const body = {username, password}
    fetch(BASE_URL+'/login', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    })
    .then( async (response) => {
        const output = await response.json();
        console.log("THe login output is ", output)
    })
    .catch((err) => {
        console.log("The error is ", err)
    })
}

module.exports = {
    signup, 
    login
}