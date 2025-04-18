let name=document.querySelector(".name")
let url=document.querySelector(".url")
let text=document.querySelector(".text")
let btn=document.querySelector(".btn")


// https://6765634852b2a7619f5f643f.mockapi.io/redux

let date=[]
let proId=null

async function getPro() {
    let res = await fetch('https://6765634852b2a7619f5f643f.mockapi.io/redux')
     date=await res.json()
     date.forEach((pro)=>{
        name.value=pro.name
        url.value=pro.url
        text.value=pro.text
        proId=pro.id
     })
     console.log(date);
     console.log(proId);
     
}

 async function editPro(){
  await fetch(`https://6765634852b2a7619f5f643f.mockapi.io/redux/${proId}`,{
    method:'PUT',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:name.value,
        url:url.value,
        text:text.value
    })
})
}

btn.addEventListener('click',()=>{
    editPro()
})

console.log(date);
getPro()