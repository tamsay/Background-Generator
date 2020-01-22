// alert ("Yana aiki")
// let colorValue1 = document.querySelector("#picker1");
// let colorValue2 = document.querySelector("#picker2");

// let clickEvent = colorValue1.addEventListener("click", ()=>{
//     alert('button clicked');
//     let colorResult = colorValue1;
//     console.log(colorResult);
//     return colorResult;
// });

var css = document.querySelector("h3");
var color1 = document.querySelector("#picker1");
var color2 = document.querySelector("#picker2");
var body = document.getElementById("mainBody");

let setGradient =()=> {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " +  color2.value + ")"
    // body.style.background =  "linear-gradient(to left, color1.value, black)";
    css.textContent = body.style.background + ";";
    console.log(body.style.background)
}

 color1.addEventListener("input", setGradient);

 color2.addEventListener("input", setGradient);
  console.log(color1.value)