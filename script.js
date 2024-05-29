let but=document.querySelector("#darkmode-toggle")
let mode="light"
let body=document.querySelector(".mclass")
let foot=document.querySelector(".twofoot")
let skill=document.querySelector(".headfoot")
let project=document.querySelector(".project")
let head=document.querySelector("#head")
let font=document.querySelector(".font")
but.addEventListener("click",()=>{
//  console.log("okk")
if(mode==="light" ){
    mode="dark"
    body.style.backgroundColor="rgb(2, 2, 41)";
    font.style.color="white"
    foot.style.backgroundColor="rgb(2, 2, 41)";
    skill.style.color="white"
    project.style.color="white"
    head.style.backgroundColor="rgb(9, 9, 99)";
}else{
    mode="light"
    body.style.backgroundColor="#dbd2d9"
    body.style.color="black"
    font.style.color="black"
    foot.style.backgroundColor="#dbd2d9"
    skill.style.color="black"
    project.style.color="black"
    head.style.backgroundColor="rgb(92, 92, 131)";


}
})