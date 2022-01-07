const navToggle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => 
{
    navMenu.classList.toggle("nav-menu_visible")
})

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        if(e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".articulo").forEach(fruta =>{

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
        })
    }
})