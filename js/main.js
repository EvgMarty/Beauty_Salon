//Бургер Х
const navbarBurger = document.querySelector('.navbar__burger');
const body = document.querySelector('body');
const navbar  = document.querySelector('.navbar');

//Табы
const  tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');




//Бургер Х
// Клик по бургер меню 
navbarBurger.onclick = burgerMenu;

// Клик по меню 
navbar.onclick = (e) =>{
   if(e.target.classList.contains('navbar--active')){
      burgerMenu();
   }
}

// Функуия проверяет наличие класса у улементов 
function burgerMenu () {
   navbarBurger.classList.toggle('navbar__burger--active')
   navbar.classList.toggle('navbar--active')
   body.classList.toggle('noscroll')
}


//Табы
tabHeaders.forEach((item)=>{
   item.addEventListener('click',(event)=>{

      //Скрыть все контентбоксы
      contentBoxes.forEach((item)=>{
         item.classList.add('hidden');
      })

      //Октрыть нужный
      //Нашли контент боксы с нужним ID
      const tab = event.target.dataset.tab;
      const contentBox = document.querySelector('#' + tab);
      contentBox.classList.remove('hidden');


      //Убрать у всех табов актив
      tabHeaders.forEach((item)=>{
         item.classList.remove('portfolio__list-item--active');
      })
      //Задать актив табу
      event.target.classList.add('portfolio__list-item--active');

   })
})

