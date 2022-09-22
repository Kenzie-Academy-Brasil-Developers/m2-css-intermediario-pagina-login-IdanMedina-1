const forgotPass = document.getElementById("asignPassword")
console.log(forgotPass)
forgotPass.addEventListener("click", () => {
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
} )