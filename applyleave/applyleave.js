"use strict";
console.log('hi');
// let h1Element = document.getElementById('h1')
// let user = sessionStorage.getItem('user')
// let newElement = document.createElement('p')
// newElement.innerHTML = `Hi ${user}`
// h1Element.append(newElement)

const currentMonth = new Date().getMonth() + 1;
// async function getdata(){
   
//     const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
//     const obj = await data.json();
//     console.log(obj)
//     setpl(obj);
 
   
// }

// getdata() 

// function setpl(obj){
//     let pl = `${obj[0].pl}`

// let pl = sessionStorage.getItem('pl')
// console.log('====>', pl)

let pl = Number(sessionStorage.getItem('pl'))
console.log('=====>',pl)


    if (currentMonth === 1 && pl === 1) {
        console.log(typeof pl)
        document.getElementById('plavailable').value=1
    }else if (currentMonth === 1 && pl === 0){
        document.getElementById('plavailable').value = 0
    }else if (currentMonth === 2 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 2 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 3 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 3 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if(currentMonth === 3 && pl === 0){
        document.getElementById('plavailable').value=1
    }else if(currentMonth === 4 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 4 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 4 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 4 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 5 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 5 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 5 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 5 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 5 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 6 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 6 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 6 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 6 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 6 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 6 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 7 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 7 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 7 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 7 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 7 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 7 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 7 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 8 && pl === 7){
        document.getElementById('plavailable').value = 8
    }else if (currentMonth === 8 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 8 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 8 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 8 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 8 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 8 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 8 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 9 && pl === 8){
        document.getElementById('plavailable').value = 9
    }else if (currentMonth === 9 && pl === 7){
        document.getElementById('plavailable').value = 8
    }else if (currentMonth === 9 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 9 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 9 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 9 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 9 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 9 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 9 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 10 && pl === 9){
        document.getElementById('plavailable').value = 10
    }else if (currentMonth === 10 && pl === 8){
        document.getElementById('plavailable').value = 9
    }else if (currentMonth === 10 && pl === 7){
        document.getElementById('plavailable').value = 8
    }else if (currentMonth === 10 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 10 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 10 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 10 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 10 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 10 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 10 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 11 && pl === 10){
        document.getElementById('plavailable').value = 11
    }else if (currentMonth === 11 && pl === 9){
        document.getElementById('plavailable').value = 10
    }else if (currentMonth === 11 && pl === 8){
        document.getElementById('plavailable').value = 9
    }else if (currentMonth === 11 && pl === 7){
        document.getElementById('plavailable').value = 8
    }else if (currentMonth === 11 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 11 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 11 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 11 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 11 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 11 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 11 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else if (currentMonth === 12 && pl === 11){
        document.getElementById('plavailable').value = 12
    }else if (currentMonth === 12 && pl === 10){
        document.getElementById('plavailable').value = 11
    }else if (currentMonth === 12 && pl === 9){
        document.getElementById('plavailable').value = 10
    }else if (currentMonth === 12 && pl === 8){
        document.getElementById('plavailable').value = 9
    }else if (currentMonth === 12 && pl === 7){
        document.getElementById('plavailable').value = 8
    }else if (currentMonth === 12 && pl === 6){
        document.getElementById('plavailable').value = 7
    }else if (currentMonth === 12 && pl === 5){
        document.getElementById('plavailable').value = 6
    }else if (currentMonth === 12 && pl === 4){
        document.getElementById('plavailable').value = 5
    }else if (currentMonth === 12 && pl === 3){
        document.getElementById('plavailable').value = 4
    }else if (currentMonth === 12 && pl === 2){
        document.getElementById('plavailable').value = 3
    }else if (currentMonth === 12 && pl === 1){
        document.getElementById('plavailable').value = 2
    }else if (currentMonth === 12 && pl === 0){
        document.getElementById('plavailable').value = 1
    }else {
        alert("Invalid Entry.Please try again or less chance for PL approval")
    }
// }

function changeFunc(value){ 
    if (value === "casual"){
        casual()
    }else if(value === 'emergency'){
        emergency()
    }else{
        alert('value not found')
    }

}

function casual(){
    let dtToday = new Date();
   
    let month = ('0' + (dtToday.getMonth() + 1)).slice(-2);
    let day = ('0' +( dtToday.getDate())).slice(-2);
    
    let year = dtToday.getFullYear();
    let date = year + '-' + month + '-' + day;
    
    
    document.getElementById('fromdate').setAttribute('min', date);
    document.getElementById('todate').setAttribute('min', date);
    alert('done')
}

function emergency(){
    alert('You can only apply from one week prior to today')
    let dtToday = new Date();
   


    let SevenDaysAgo = new Date(new Date().setDate(dtToday.getDate() - 7));
    // console.log('======> ',SevenDaysAgo)
    let month = ('0' + ((SevenDaysAgo.getMonth() + 1))).slice(-2);
    let day = ('0' + SevenDaysAgo.getDate()).slice(-2);
    
    
    let year = SevenDaysAgo.getFullYear();
    let date = year + '-' + month + '-' + day;
    document.getElementById('fromdate').setAttribute('min', date);
    document.getElementById('todate').setAttribute('min', date);
    alert('done') 
}





function showtext(){
    
    let getreason = document.getElementById('reason').value;
    let getfromdate = document.getElementById('fromdate').value;
    let gettodate = document.getElementById('todate').value;
    // let getdays = document.getElementById('days').value;
    let getpl = document.getElementById('plavailable').value;
    let e = document.getElementById('leavetype');
    let leavetype = e.options[e.selectedIndex].value;
    
    let total = ((new Date(gettodate) - new Date(getfromdate))/(3600000*24)) + 1
    document.getElementById('days').value= total



    sessionStorage.setItem('reason', getreason );
    sessionStorage.setItem('fromdate', getfromdate);
    sessionStorage.setItem('todate', gettodate); 
    sessionStorage.setItem('totaldays', total);
    sessionStorage.setItem('plavailable', getpl);
    sessionStorage.setItem('leavetype', leavetype);


   
       
   
   
}





console.log(sessionStorage.getItem('reason'))
console.log(sessionStorage.getItem('fromdate'))
console.log(sessionStorage.getItem('todate'))
console.log(sessionStorage.getItem('totaldays')) 
console.log(sessionStorage.getItem('plavailable'))
console.log(sessionStorage.getItem('leavetype'))

let url = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees"


function updateRequest(){
    let data = {
        applyleave :{ 
        reason : sessionStorage.getItem('reason'),
        fromdate : sessionStorage.getItem('fromdate'),
        todate : sessionStorage.getItem('todate'),
        totaldays : sessionStorage.getItem('totaldays'),
        plavailable : sessionStorage.getItem('plavailable'),
        leavetype : sessionStorage.getItem('leavetype')

        }
        
    };

    fetch(url + "/1", {
        method : "put",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        },
    }).then((result) => result.json())
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)

    })

   
    
};
updateRequest()




function cancel(){
    window.location='/details/details.html'
}




