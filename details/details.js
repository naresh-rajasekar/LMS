


// const detailstable = document.querySelector("#detailstable");
// // const btn = document.querySelector('#button')
// let button=document.getElementById('button')
    

// async function getdata(e){
//     e.preventDefault()
// detailstable.innerHTML = 'loading......';
// try{
//     const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
//     const obj = await data.json();
//     detailstable.innerHTML=`
//     <p>
//     <table>
//         <tr>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Address</th>
//             <th>Phone</th>
//         </tr>
//         <tr>
//             <td>${obj[0].Name}</td>
//             <td>${obj[0].Role}</td>
//             <td>${obj[0].Address}</td>
//             <td>${obj[0].Phone}</td>
//         </tr>
            
//     </table>
//     </p>`
    
// }catch(error){
//     console.log(error);

// }
// }

// detailstable.addEventListener('click', getdata);
// button.removeEventListener('click',getdata); 


async function details(){
    const response = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
    const data = await response.json();
    console.log(data)
    show(data);
    

}
details()

function show(data){
    console.log('hi')
    let det = `
    <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Address</th>
        <th>Phone</th>
    </tr>
    <tr>
        <td>${data[0].Name}</td>
        <td>${data[0].Role}</td>
        <td>${data[0].Address}</td>
        <td>${data[0].Phone}</td>
    </tr>
    `
    document.getElementById('detailstable').innerHTML = det
}





function applyPl(){
    
    window.location="/applyleave/applyleave.html"
}



async function getdata(){
   
    const data = await fetch("https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees");
    const obj = await data.json();
    console.log(obj)
    display(obj);
 
   
}



function display(obj){
    let stat = `${obj[0].status}`

    document.getElementById('status').value = stat
}

getdata();

// let url = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees"




// function deletedata(){
    
//     let data = {
//         "status" : "pending",
//         applyleave :{ 
//             reason : "",
//             fromdate : "",
//             todate : "",
//             totaldays : "",
           
//             leavetype : ""
    
//             }
            
    
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
    
// };  

function pending(){
    sessionStorage.clear('reason')
    sessionStorage.clear('fromdata')
    sessionStorage.clear('todate')
    sessionStorage.clear('totaldays')
    sessionStorage.clear('leavetype')
    pendingChange()
    alert('cleared successfully')
}

let url = "https://63b0422ef9a53fa20264d7d2.mockapi.io/details/employees"

function pendingChange(){
    
    let data = {
        "status" : "pending"
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