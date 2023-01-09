// const targetElement = document.querySelector('#displaydata');
// const newElement = document.createElement('p')
// newElement.innerHTML = "<p>hi</P>"
// targetElement.append(newElement)

// const button = document.getElementById('displaybutton')

// function getdata(){
    
//     const url = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees"

//     fetch(url, {
//         method:"GET",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//     }).then((result)=>result.json())
//     .then((data) => {
//         newElement.innerHTML = `<p>${data[0].Name}</p>`
//         targetElement.append(newElement);
//         console.log(`${data[0].Name}`)
        
//     })
    
    
// .catch((error) =>{
//     console.log(error);

// })
// }

// getdata()

async function getdata(){
   
    const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
    const obj = await data.json();
    console.log(obj)
    show(obj);
 
   
}

getdata()

function show(obj) {
    let tab = `<tr>
    <th>Name</th>
    <th>Role</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Reason</th>
    <th>From Date</th>
    <th>To Date</th>
    <th>Total Days</th>
    <th>PL Available</th>
    <th>Leave Type</th>
    </tr>
    <tr>
    <td>${obj[0].Name}</td>
    <td>${obj[0].Role}</td>
    <td>${obj[0].Address}</td>
    <td>${obj[0].Phone}</td>
    <td>${obj[0].applyleave['reason']}</td>
    <td>${obj[0].applyleave['fromdate']}</td>
    <td>${obj[0].applyleave['todate']}</td>
    <td>${obj[0].applyleave['totaldays']}</td>
    <td>${obj[0].applyleave['plavailable']}</td>
    <td>${obj[0].applyleave['leavetype']}</td>

    </tr>`

    document.getElementById('employee').innerHTML=tab


    if ( `${obj[0].applyleave['totaldays']}` > `${obj[0].applyleave['plavailable']}` ){
        alert("total leave requested is greater than pl available")
    }else if(`${obj[0].applyleave['totaldays']}` <= `${obj[0].applyleave['plavailable']}` ){
        alert("total leave requested is less than or equal to pl available")
    }

    
};

let url = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees"

function approve(){
    
    let data = {
        "status" : "approved"
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

    leaverecord()

    // let pl = 1;
    // sessionStorage.setItem("pl", pl)
    
    
};
async function leaverecord(){
   
    const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
    const obj = await data.json();
    console.log(obj)
    storeRecord(obj);
 
   
}






let newurl = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/leaverecord"


function storeRecord(obj){
    let data = {
        
            
             "Name": `${obj[0].Name}`,
             "Role": `${obj[0].Role}`,
             "Address": `${obj[0].Address}`,
             "Phone": `${obj[0].Phone}`,
             "applyleave": `${obj[0].applyleave}`,
             "status": `${obj[0].status}`,
             "id": "1"
            
           

        
        
    };

    fetch(newurl,{
        method : "post",
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

// async function updatepl(){

//     const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
//     const obj =  await data.json();
//     console.log(obj)
//     target(obj);
    
    
// }

// console.log(sessionStorage.getItem('totaldays') - sessionStorage.getItem('plavailable'))

// function target(obj){
//     let data = {
//         "pl" : sessionStorage.getItem('totaldays') - sessionStorage.getItem('plavailable')
//     };

//     fetch(url + "/1", {
//         method : "put",
//         body : JSON.stringify(data),
//         headers : {
//             "Content-Type" : "application/json"
//         },
//     }).then((result) => result.json())
//     .then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)

//     })

//     console.log('success')
// }

// async function pldata(){
   
//     const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
//     const obj = await data.json();
//     console.log(obj)
//     updatepl(obj);
 
   
// }



// function updatepl(obj){
//     let data = {
//          "pl" : (obj)=>{ if(`${obj[0].status}` === "accepted"){
//             `${obj[0].applyleave['totaldays']}` - `${obj[0].applyleave['plavailable']}`
//           sessionStorage.setItem("pl", pl)  
             
//          }
        
//           else if(`${obj[0].status}` === "rejected"){
//                 alert('PL request has been rejected hence cannot update PL')
//           }

// }

//     };

//     fetch(url + "/1", {
//         method : "put",
//         body : JSON.stringify(data),
//         headers : {
//             "Content-Type" : "application/json"
//         },
//     }).then((result) => result.json())
//     .then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)

//     })

//     console.log('success')
// }


function updatepl(){
    let pl = (prompt('Please type the no of remaining pl'))

    console.log('...........>', typeof pl)
    sessionStorage.setItem("pl",pl)
    console.log('...........>', typeof sessionStorage.getItem("pl",pl))
}











function reject(){
    
    let data = {
        "status" : "rejected"
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


function home(){
    window.location = "/index/index.html"
}