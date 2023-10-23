const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')

let count = 1; 
const larguraDaTela = window.innerWidth;


function slide() {
 if(larguraDaTela >= 800){
    if (count === 1) {
        image1.style.marginLeft = '0';
        image2.style.marginRight = '650px';
        count = 0; 
    } else {
        image1.style.marginLeft = '650px';
        image2.style.marginRight = '0';
        count = 1; 
    }
    console.log(count);
 } {
    return
 }
   
}

setInterval(slide, 6000);
