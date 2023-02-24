const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const linkoDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkoDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
})