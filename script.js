let css = document.querySelector("h3");
let color1 = document.querySelector("#picker1");
let color2 = document.querySelector("#picker2");
let body = document.getElementById("mainBody");
// let gradientType = document.querySelector("#linear input")

let typeSelector = ()=>{
    let directionLinear = [...document.querySelectorAll("#linear input")];

    directionLinear.map(item=>{
        let click = item.addEventListener("click", ()=>{
            console.log(item.value)
            if(item.value === 'left'){
                getInput("left");  
            }
            else if(item.value === 'right'){
                getInput("right");  
              }
            else if(item.value === 'top'){
                getInput("top");  
            }
            else{
                getInput("bottom");   
            }
        })
        return click;
    })
    console.log(directionLinear);
}
let setGradient =(dir)=> {
   body.style.background = "linear-gradient(to " + dir + ", " + color1.value + ", " +  color2.value + ")"
    css.textContent = body.style.background + ";";
    console.log(body.style.background)
}
let setGrad =()=> {
    let dir = 'right';
    body.style.background = "linear-gradient(to " + dir + ", " + color1.value + ", " +  color2.value + ")"
     css.textContent = body.style.background + ";";
     console.log(body.style.background)
 }
let getInput =(dir)=>{
     color1.addEventListener("input", setGradient(dir));
     color2.addEventListener("input", setGradient(dir));
}
let getInp =()=>{
    color1.addEventListener("input", setGrad);
    color2.addEventListener("input", setGrad);
}
 typeSelector();
 getInp();
