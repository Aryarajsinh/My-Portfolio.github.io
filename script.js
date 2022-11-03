let toggle = document.getElementsByClassName("toggle")[0];

toggle.addEventListener("click",myToggle,false);

function myToggle(){
    toggle.classList.toggle("change"); 
}


toggle.addEventListener("click",navFunction,false);

function navFunction(){
    var itemsDisplay = document.getElementById("flex");

    if (itemsDisplay.style.display === "flex") {
        itemsDisplay.style.display = "none";
      } else {
        itemsDisplay.style.display = "flex";
      }
}  