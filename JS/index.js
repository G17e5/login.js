    document.querySelector('.signup-btn').addEventListener('click',function(e){
    document.querySelector('.login').classList.add('d-none')
    document.querySelector('.signup').classList.remove('d-none')
});
// =====================================================================
// kol inputs el 3andy
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var currentUser;



var nameRgx=/^[A-Z][a-z]+$/;
var emailRgx=/^[a-z]+@gmail+.com+$/;
var passwordRgx=/[a-z0-9]{5,}$/;


signupName.addEventListener("focusout",function(){
    if(nameRgx.test(signupName.value)==false){
        alert("you must start frist char captial")
    }
})
signupEmail.addEventListener("focusout",function(){
    if(emailRgx.test(signupEmail.value)==false){
        alert("you must have @gmail")

    }
})
signupPassword.addEventListener("focusout",function(){
    if(passwordRgx.test(signupPassword.value)==false){
        alert("you must have 5 char and dgit ")

    }
})


var signUpArray = []
if (localStorage.getItem('users') != null) {

    signUpArray = JSON.parse(localStorage.getItem('users'))
    
} 

//for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    // to store all value as object
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    // console.log(signUp);
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    }

    clearInput()


}

function clearInput(){
    signupName.value="";
    signupEmail.value="";
    signupPassword.value="";
    signinEmail.value="";
    signinPassword.value="";
}


//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}



function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value

    
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email== email && signUpArray[i].password== password) {
                document.querySelector('.login').classList.add('d-none')
                document.querySelector('.signup').classList.add('d-none')
                document.querySelector('.welcome').classList.remove('d-none')
                document.getElementById('incorrect').innerHTML = ''
                currentUser=signUpArray[i].name
                document.getElementById('username').innerHTML = `welcome `+currentUser ;

            break;
        }

          else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
    
    



    clearInput()

}









