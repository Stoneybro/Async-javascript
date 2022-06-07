//  const request = new XMLHttpRequest();
//  request.addEventListener("readystatechange",()=>{
//   console.log(request,request.readyState);
//    if (request.readyState===4) {
//        console.log(request.responseText);
//    }

// })
//  request.open("GET","https://jsonplaceholder.typicode.com/todos")
//  request.send()

// const posts=[
//   { title:"post one", body:"this is post one"},
//   { title:"post two", body:"this is post two"}
// ]
// function getposts(params) {
//   setTimeout(() => {
//     let output=""
//     posts.forEach((post,index)=>{
//       output+=`<li>${post.title}</li>`
//     })
//     document.body.innerHTML=output
//   }, 2000);
// }

// function createpost(post,callback) {
//   setTimeout(() => {
//     posts.push(post);callback()
//   }, 3000);

// }
// createpost({title:"post three",body:"this is post three"}, getposts)




// const myPromise= new Promise((resolve,reject)=>{

// })

const button=document.querySelector(".button")
button.addEventListener("click",()=>{
    // var xhr=new XMLHttpRequest()
    // xhr.open("GET","jsontext.json",true)
    // xhr.onload=()=>{
    // if (xhr.status==200) {
    //     let y=JSON.parse(xhr.responseText)
    //     console.log(y);
      
    // } }
    // xhr.send()
    fetch("jsontext.json")
    .then((res)=>res.json())
    .then((data)=>{
        let x=document.createElement("div")
        let xtext=document.createTextNode(`request successful:${data.name}`)
        x.appendChild(xtext)
        document.body.appendChild(x)
    })
})