const collapsibles=document.querySelectorAll(".collapsible")
console.log(collapsibles)
collapsibles.forEach((c) => {
    c.addEventListener("click", function (){
        this.classList.toggle("collapsible--expanded")
    })
})