const navBar = document.getElementById('nav-bar');
const burgerMeniu = document.getElementById('burger-meniu');
const meniuIcon = document.getElementById('meniu-icon')
let delateIcon = false ;

navBar.addEventListener('click' , () => {
    burgerMeniu.classList.toggle('active');
    if(delateIcon) {
        meniuIcon.src = 'assets/features/mobile/burger-icon.svg'
        delateIcon = false ;
    } 
    else {
        meniuIcon.src = 'assets/features/mobile/close-icon.svg'
        delateIcon = true ;
    }
});