const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor")
const mainElement = document.querySelector(".main-class");
const HIDDEN= "hidden";
function showDetails(){
mainElement.classList.remove("hidden");
}
function hideDetails(){
mainElement.classList.add("hidden");
}
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    const title = anchor.getAttribute("data-details-title");
    detailsTitle.innerHTML = title;

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    } )
}