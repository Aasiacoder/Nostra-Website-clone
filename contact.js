//side bar

let menubaricon = document.getElementById("menubar-icon")
let sidebar = document.getElementById("sidebar")


menubaricon.addEventListener("click", function(){
    event.preventDefault();
    sidebar.style.marginLeft = "0px"
})

let sideicon = document.getElementById("side-close__icon").addEventListener("click", () => {
    document.getElementById("sidebar").style.marginLeft = "-50%"
})