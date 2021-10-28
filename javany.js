const inputs = document.querySelectorAll(".input")

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");

}
function blurFunc(){
  let parent = this.parentNode;
  if (this.value ==""){
  parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var bgs = document.querySelector(".bgs")
var imagenes = [
    "url('imagenes/1.png')",
    "url('imagenes/2.png')",
    "url('imagenes/3.png')",
    "url('imagenes/4.png')",
    "url('imagenes/5.png')",
    "url('imagenes/6.png')",
    "url('imagenes/7.png')",
    "url('imagenes/8.png')",
    "url('imagenes/9.png')",
    "url('imagenes/10.png')",
    "url('imagenes/11.png')",
    "url('imagenes/12.png')",
    "url('imagenes/13.png')",
    "url('imagenes/14.png')"
   
   
   
    
  ]

 
  
  


setInterval( function () {
  var bg = imagenes[Math.floor(Math.random() * imagenes.length)];
  
  bgs.style.background = bg;
  bgs.style.backgroundRepeat = "no-repeat";
  bgs.style.backgroundPosition = "center";
  

  
} ,2000)