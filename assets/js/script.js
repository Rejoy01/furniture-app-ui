document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    login()
})



function login(){
    const username = document.getElementById("login-user").value
    const pass = document.getElementById("login-pass").value


    const data = {
        username: username, 
        password: pass
    }

    fetch('http://localhost:4000/Auth/login',{

        method:'POST',
        headers: {'Content-Type': 'application/json'},

        body : JSON.stringify(data)

    })
    .then(response => {
        if (response.ok) {
            return response.json()
        }else{
            throw new Error('login failed: ')
        }
    })
    .then(data => {

        console.log('Login successful :',data)

    })
    .catch((error)=>{

        console.error('Login failed',error)

    })

}

function register(){
    
}