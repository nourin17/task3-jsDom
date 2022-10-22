const image=document.getElementById("image")
const header=document.getElementById("header")
const flip=document.getElementById("flip")
const perfect=document.getElementById("perfect")
const background=document.getElementById("background")
function invertImg(){
image.style.transform="rotate(180deg)"
flip.style.display="none"
background.style.backgroundColor="coral"
header.style.display="block"
perfect.style.display="block"

}

function reverse(){
    image.style.transform="rotate(360deg)"
flip.style.display="block"
background.style.backgroundColor="#fff"
header.style.display="none"
perfect.style.display="none"
}