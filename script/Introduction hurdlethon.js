function helloWorld(name,Color){
    alert(`Hello, ${name},You choose ${Color}`);
    
}
alert("GDG on Campus Sogang");

const helloBtn=document.getElementById("helloBtn");
const userName=document.getElementById("helloName");
const Color=document.getElementById("color");

helloBtn.addEventListener("click",()=>{
    helloWorld(userName.value,Color.value);
})
