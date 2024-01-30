//Анимация карточек
gsap.to(".card",{x: 2, duration: 3, stagger: .6, opacity:1})

//Определили константы для кнопок с валютой
const buttonCurrencyOne = document.querySelector(".one");
const buttonCurrencyTwo = document.querySelector(".two");
const buttonCurrencyThree = document.querySelector(".three");

//Определили константы для кнопок с ценой
const buttonPriceOne = document.querySelector(".onePrice");
const buttonPriceTwo = document.querySelector(".twoPrice");
const buttonPriceThree = document.querySelector(".threePrice");

//Определили константы для кнопок с периодом
const buttonTimeOne = document.querySelector(".oneTime");
const buttonTimeTwo = document.querySelector(".twoTime");
const buttonTimeThree = document.querySelector(".threeTime");

//Повесили подслушку на кнопки с валютой
buttonCurrencyOne.addEventListener("click", changeCurrency);
buttonCurrencyTwo.addEventListener("click", changeCurrency);
buttonCurrencyThree.addEventListener("click", changeCurrency);

//Повесили подслушку на кнопки с периодом
buttonTimeOne.addEventListener("click", changeDate);
buttonTimeTwo.addEventListener("click", changeDate);
buttonTimeThree.addEventListener("click", changeDate);


//Функция смены периода при нажатии на кнопку (месяца/дни).
//Если нажата кнопка "Месяцы" в любой из трех карточек, ее значение меняется на "Дни" во всех карточках, пересчитываются цены по трем возможным валютам.
//Из расчета, что в месяце 30 дней
function changeDate() {
if (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months") {
buttonTimeOne.textContent = "/Days";
buttonTimeTwo.textContent = "/Days";
buttonTimeThree.textContent = "/Days";


    if ((buttonCurrencyOne.textContent == "$" || buttonCurrencyTwo.textContent == "$" || buttonCurrencyThree.textContent == "$") &&
    (buttonTimeOne.textContent == "/Days" || buttonTimeTwo.textContent == "/Days" || buttonTimeThree.textContent == "/Days")) {
        buttonCurrencyOne.textContent = "$";
        buttonCurrencyTwo.textContent  = "$";
        buttonCurrencyThree.textContent  = "$";
        buttonPriceOne.textContent = 30*30;
        buttonPriceTwo.textContent  = 276*30;
        buttonPriceThree.textContent  = 420*30;
    }
    else if ((buttonCurrencyOne.textContent == "₽" || buttonCurrencyTwo.textContent == "₽" || buttonCurrencyThree.textContent == "₽") &&
    (buttonTimeOne.textContent == "/Days" || buttonTimeTwo.textContent == "/Days" || buttonTimeThree.textContent == "/Days")) {
        buttonCurrencyOne.textContent = "₽";
        buttonCurrencyTwo.textContent  = "₽";
        buttonCurrencyThree.textContent  = "₽";
        buttonPriceOne.textContent = 30*89*30;
        buttonPriceTwo.textContent  = 276*89*30;
        buttonPriceThree.textContent  = 420*89*30;
    }
    else if ((buttonCurrencyOne.textContent == "€" || buttonCurrencyTwo.textContent == "€" || buttonCurrencyThree.textContent == "€") &&
    (buttonTimeOne.textContent == "/Days" || buttonTimeTwo.textContent == "/Days" || buttonTimeThree.textContent == "/Days")) {
        buttonCurrencyOne.textContent = "€";
        buttonCurrencyTwo.textContent  = "€";
        buttonCurrencyThree.textContent  = "€";
        buttonPriceOne.textContent = Math.round(30*0.92*30);
        buttonPriceTwo.textContent  = Math.round(276*0.92*30);
        buttonPriceThree.textContent  = Math.round(420*0.92*30);
}
}

//Если нажата кнопка "Дни" в любой из трех карточек, ее значение меняется на "Месяцы" во всех карточках, пересчитываются цены по трем возможным валютам.
else {
buttonTimeOne.textContent = "/Months";
buttonTimeTwo.textContent = "/Months";
buttonTimeThree.textContent = "/Months";

    if ((buttonCurrencyOne.textContent == "$" || buttonCurrencyTwo.textContent == "$" || buttonCurrencyThree.textContent == "$") &&
    (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "$";
        buttonCurrencyTwo.textContent  = "$";
        buttonCurrencyThree.textContent  = "$";
        buttonPriceOne.textContent = 30;
        buttonPriceTwo.textContent  = 276;
        buttonPriceThree.textContent  = 420;
    }
    else if ((buttonCurrencyOne.textContent == "₽" || buttonCurrencyTwo.textContent == "₽" || buttonCurrencyThree.textContent == "₽") &&
    (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "₽";
        buttonCurrencyTwo.textContent  = "₽";
        buttonCurrencyThree.textContent  = "₽";
        buttonPriceOne.textContent = 30*89;
        buttonPriceTwo.textContent  = 276*89;
        buttonPriceThree.textContent  = 420*89;
    }
    else if ((buttonCurrencyOne.textContent == "€" || buttonCurrencyTwo.textContent == "€" || buttonCurrencyThree.textContent == "€") &&
    (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "€";
        buttonCurrencyTwo.textContent  = "€";
        buttonCurrencyThree.textContent  = "€";
        buttonPriceOne.textContent = Math.round(30*0.92);
        buttonPriceTwo.textContent  = Math.round(276*0.92);
        buttonPriceThree.textContent  = Math.round(420*0.92);
    }

}
}

//Функция смены валюты при нажатии на кнопку валюты($/₽/€).
//Если нажата кнопка валюты в любой из трех карточек, ее значение меняется на другую валюту во всех карточках, пересчитываются цены.
//Из расчета, что в 1 дол = 89 руб, 1 дол = 0.92 евро
function changeCurrency() {

    if ((buttonCurrencyOne.textContent == "$" || buttonCurrencyTwo.textContent == "$" || buttonCurrencyThree.textContent == "$") && 
     (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "₽";
        buttonCurrencyTwo.textContent = "₽";
        buttonCurrencyThree.textContent = "₽";
        buttonPriceOne.textContent = 30*89;
        buttonPriceTwo.textContent = 276*89;
        buttonPriceThree.textContent = 420*89;
    }
    else if ((buttonCurrencyOne.textContent == "₽" || buttonCurrencyTwo.textContent == "₽" || buttonCurrencyThree.textContent == "₽") &&
    (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "€";
        buttonCurrencyTwo.textContent = "€";
        buttonCurrencyThree.textContent = "€";
        buttonPriceOne.textContent = Math.round(30*0.92);
        buttonPriceTwo.textContent = Math.round(276*0.92);
        buttonPriceThree.textContent = Math.round(420*0.92);
    }
    else if ((buttonCurrencyOne.textContent == "€" || buttonCurrencyTwo.textContent == "€" || buttonCurrencyThree.textContent == "€") &&
    (buttonTimeOne.textContent == "/Months" || buttonTimeTwo.textContent == "/Months" || buttonTimeThree.textContent == "/Months")) {
        buttonCurrencyOne.textContent = "$";
        buttonCurrencyTwo.textContent = "$";
        buttonCurrencyThree.textContent = "$";
        buttonPriceOne.textContent = 30;
        buttonPriceTwo.textContent = 276;
        buttonPriceThree.textContent = 420;
    }
    
    }








    





