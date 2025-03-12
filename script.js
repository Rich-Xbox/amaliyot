let ism = document.querySelector(".ism")
let parol = document.querySelector(".parol")
let tekshirish_btn = document.querySelector(".tekshirish")
if(localStorage.getItem("access") == "true" ){
    location.href = "./dashboard.html"
}else{
    let yangi_ism = prompt("yangi username yarating")
    let yangi_parol = prompt("yangi parol yarating")


    
window.addEventListener("change", (e)=>{
    e.preventDefault()

    if(ism.value && parol.value){
        tekshirish_btn.removeAttribute("disabled")
    }else{
        tekshirish_btn.setAttribute("disabled", "true ")
    }
})

tekshirish_btn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(ism.value == yangi_ism && parol.value == yangi_parol){
        location.href = "./dashboard.html"
        localStorage.setItem("access", "true" )
    }
})


}