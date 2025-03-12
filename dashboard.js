let logout = document.querySelector(".logout")


logout.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("access")
    localStorage.setItem("access", "false" )

     location.href = "./index.html"

})