function clickOpenNavSideMobilBar() {
    let mobil_bar = document.getElementsByTagName("nav")[0];
    let bar = document.getElementsByClassName("bar")[0];
    let closeBar = document.getElementsByClassName("close-bar")[0];

    mobil_bar.classList.add("forMobilBar");
    bar.style.display = "none";         
    closeBar.style.display = "flex";     
    document.body.style.backgroundColor = "hsl(233, 8%, 79%)";
}

function clickCloseMenu() {
    let mobil_bar = document.getElementsByTagName("nav")[0];
    let bar = document.getElementsByClassName("bar")[0];
    let closeBar = document.getElementsByClassName("close-bar")[0];

    mobil_bar.classList.remove("forMobilBar");
    bar.style.display = "flex";        
    closeBar.style.display = "none";    
    document.body.style.backgroundColor = "";
}


