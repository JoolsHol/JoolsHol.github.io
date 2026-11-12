const menuMobile=document.getElementById("menuMobile")
const menuButton=document.getElementById("menuButton")
console.log("menuMobile")


menuButton.addEventListener("click",
    (event)=>{
        if(menuMobile.style.display==="block"){
            menuMobile.style.display="none"
        }else{
            menuMobile.style.display="block"
        }
    },
    false
)

