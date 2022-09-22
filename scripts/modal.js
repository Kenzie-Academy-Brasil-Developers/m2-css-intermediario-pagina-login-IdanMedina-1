const asignModal = document.querySelectorAll("[data-modal-control]")
for(let i = 0; i < asignModal.length; i++){
    asignModal[i].addEventListener("click", ()=>{
        let modal = asignModal[i].getAttribute("data-modal-control")
        document.getElementById(modal).classList.toggle("show-modal")
    })
}

