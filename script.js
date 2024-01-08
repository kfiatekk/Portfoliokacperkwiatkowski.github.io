
document.addEventListener('DOMContentLoaded', function(){
const textInP = 'Mam szesnaście lat i nazywam się Kacper Kwiatkowski, uczęszczam do ZSMEIE w Toruniu, gdzie zdobywam wiedzę na profilu technika programisty. Posiadam umiejętność programowania i tworzenia aplikacji, a także posługuję się językiem angielskim na poziomie B2 oraz językiem niemieckim na poziomie A1. Moim ojczystym językiem jest polski.';
const headerP = document.getElementById("text");
let actualText = '';
let i = 0;
const intervalFor = setInterval(function(){
    if(i < textInP.length) {
        actualText += textInP[i];
        headerP.textContent = actualText;
        i++;
    } else {
        clearInterval(intervalFor);
    }
}, 40);
    
})

