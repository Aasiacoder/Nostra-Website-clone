import {products} from "./product.js";

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

//products
var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;height: 30vh;" src="${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }
    })
})

function update()
{
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        
        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }  
    };
}
