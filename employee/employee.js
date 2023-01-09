function employeeLogin(){
   
    let username = document.querySelector('#username').value;
  
    let password = document.querySelector('#password').value;

    if (username === 'abcd' && password === 'abcd'){
    
        alert (`welcome mr ${username}`)
        
        sessionStorage.setItem("user", username)
        window.location ="/details/details.html";
      
       
    
    } else{
        alert(`try again`)
    }

}

function show(){
    let divElement = document.getElementById('details');
    // console.log(divElement)
    let paraElement = document.createElement('p');
    let user = sessionStorage.getItem('user')
    paraElement.innerHTML = `Welcome ${user}`;   
    divElement.append(paraElement);
 
}

function allFunc(){
    

    setTimeout(employeeLogin(), 1000)
    setTimeout(show(), 1500)
    
}

function cancel(){
    window.location = '/index/index.html'
}