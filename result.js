function reset(){
    location.href="./index.html"
}

var points= sessionStorage.getItem("points")

var head= document.getElementById("result-header")
var body=document.getElementById("result-body")

if(points<=5){
    head.innerText="that's nice! you've got "+points+" Out of 6 right"
    body.innerText="Marvel have created more avengers than even the geekiest of geeks could remember, but that doesn't mean you shouldn't try."

}else{
    head.innerText="oops! you've got "+points+"Out of 6 right"
    body.innerText="You worked hard and it paid off! Nice work figuring out these tough question, you earned it buddy!"
}