//pricing
// const switcher = document.querySelector(".middle_parent_switcher");
// const child = document.querySelector(".switcher_child");
// const yearly = document.querySelector(".yearly");
// const monthly = document.querySelector(".active");
// const offer_price = document.querySelectorAll(".offer_price");
// const offer_duration = document.querySelectorAll(".offer_duration");
// let isRight = false;

// switcher.addEventListener("click", function () {
//   if (isRight) {
//     child.classList.remove("move_right");
//     child.classList.add("move_left");
//     monthly.classList.add("active");
//     yearly.classList.remove("active");
//     toMonthly();
//     isRight = false;
//   } else {
//     child.classList.remove("move_left");
//     child.classList.add("move_right");
//     monthly.classList.remove("active");
//     yearly.classList.add("active");
//     toYearly();
//     isRight = true;
//   }
// });
// let yearlyPriceString = [];
// let yearlyPriceInt = [];
// function toMonthly() {
//   for (let i = 0; i < offer_price.length; i++) {
//     yearlyPriceString.push(offer_price[i].innerHTML);
//     yearlyPriceInt = yearlyPriceString.map((yearlyPriceString) =>
//       parseFloat(yearlyPriceString.replace("$", ""))
//     );
//     offer_price[i].innerHTML = "$" + (parseInt(yearlyPriceInt[i]) + ".00");
//     offer_duration[i].innerHTML = "per month";
//   }
// }

// function toYearly() {
//   for (let i = 0; i < offer_price.length; i++) {
//     yearlyPriceString.push(offer_price[i].innerHTML);
//     yearlyPriceInt = yearlyPriceString.map((yearlyPriceString) =>
//       parseFloat(yearlyPriceString.replace("$", ""))
//     );
//     offer_price[i].innerHTML = "$" + (parseInt(yearlyPriceInt[i] * 10) + ".00");
//     offer_duration[i].innerHTML = "per year";
//   }
// }

//menu
const navBar = document.getElementById('nav-bar');
const burgerMeniu = document.getElementById('burger-meniu');
const meniuIcon = document.getElementById('meniu-icon')
const body = document.getElementsByTagName('body')[0];
let delateIcon = false ;

navBar.addEventListener('click' , () => {
    burgerMeniu.classList.toggle('active');
    if(delateIcon) {
        meniuIcon.src = 'assets/features/mobile/burger-icon.svg'
        delateIcon = false ;
        body.style.overflow = 'visible';
    } 
    else {
        meniuIcon.src = 'assets/features/mobile/close-icon.svg'
        delateIcon = true ;
        body.style.overflow = 'hidden';
    }
});

