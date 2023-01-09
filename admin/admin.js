function adminLogin(){
   
    let username = document.querySelector('#user').value;
    console.log(username)
    let password = document.querySelector('#pass').value;

    if (username === 'admin' && password === 'admin'){
        sessionStorage.setItem("Admin", username)
        window.location ="/verify/verify.html";
    } else{
        alert(`try again`)
    }

}

function cancel(){
    window.location = '/index/index.html'
}