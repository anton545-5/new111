let burger = document.querySelector('.header__burger');
let item = document.querySelector('.header__item-list1')
let header1 = document.querySelector('.header__item1')
let header2 = document.querySelector('.header__item2')
burger.addEventListener('click', ()=>{
  burger.classList.toggle('active')
  item.classList.toggle('actives')
})


header1.addEventListener('click', ()=>{
  header1.classList.toggle('actives')
})

header2.addEventListener('click', ()=>{
  header2.classList.toggle('actives')
})






const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});















          
