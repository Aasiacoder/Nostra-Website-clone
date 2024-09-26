//offer bar
const offerBar = document.getElementById("offerBar")
const iclose = document.getElementById("offer-close").addEventListener("click", function() {
    offerBar.style.display="none"
    console.log(iclose)
})

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

//slide image
 const arrowlefticon = document.getElementById("slide-arrow__icon1")
 const arrowrighticon = document.getElementById("slide-arrow__icon2")
 let imgcontainer =document.getElementById("slide-img")
 let slidermargin = 0

console.log(arrowrighticon.textContent)

 arrowrighticon.addEventListener("click", function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        imgcontainer.style.marginLeft=0;
    }
    else{
        imgcontainer.style.marginLeft="-"+slidermargin+"vw";
    }
 })

 console.log(arrowlefticon.textContent)


 arrowlefticon.addEventListener("click", function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        imgcontainer.style.marginLeft=0;
    }
    else{
        imgcontainer.style.marginLeft="-"+slidermargin+"vw";
    }
 })

 /*Like Button*/
 var likeButtons = document.querySelectorAll("#like-button");

likeButtons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        if (e.target.style.color === "red") {
            e.target.style.color = "black"; 
        } else {
            e.target.style.color = "red"; 
        }
    });
});

 
 window.addEventListener("scroll",function(){
     var elements = this.document.querySelectorAll(".initial-scroll-animate")
     elements.forEach((el)=>{
         windowHeight = window.innerHeight
      var elbound = el.getBoundingClientRect()
    
 
      console.log(windowHeight)
      console.log(elbound.top)
      if(windowHeight>elbound.top-100){
     el.classList.remove("reveal-scroll-animate")
 
     }
     
 })
     
 })