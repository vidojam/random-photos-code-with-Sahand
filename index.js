const imageContainerEl = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", ()=>{
    //console.log("Clicked");
    imageNum = 10
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img")
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}` // back tics so number can be random
        imageContainerEl.appendChild(newImgEl);
        
        
    }
    
}