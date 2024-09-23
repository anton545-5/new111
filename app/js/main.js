document.addEventListener("DOMContentLoaded", function(){
  let list1 = document.querySelector('.header__list-link1')
  let list2 = document.querySelector('.header__list-link2')
  let headerbur = document.querySelector('.header__burger')
  let item =document.querySelector('.header__item')
  
  list1.addEventListener('click', ()=>{
      list1.classList.toggle('actives')
      list2.classList.toggle('actives')
  })
  
  headerbur.addEventListener('click', ()=>{
      headerbur.classList.toggle('active')
      
      
          item.classList.toggle('activises')
      
  })

  //validadion

  let validation = new JustValidate('#form')

  validation.addField('#name', [
    {
      rule: 'required',
      errorMessage : 'Введите имя'
      
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage : 'Минимум два символа'
      
    }
  ])

  .addField('#sub', [
    {
      rule: 'required',
      errorMessage : 'Введите текст'
      
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage : 'Минимум два символа'
      
    }
  ])

  .addField('#text', [
    {
      rule: 'required',
      errorMessage : 'Введите текст'
      
    },
    {
      rule: 'minLength',
      value: 50,
      errorMessage : 'Минимум 50 символов'
      
    }
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage : 'Введите почту'
      
    },
    {
      rule: 'email',
      errorMessage : 'ошибка в почте'
      
    }
   
  ])


  .addField('#phone', [
    {
      rule: 'required',
      errorMessage : 'Введите телефон'
      
    },
    {
      rule: 'required',
      errorMessage : 'Введите телефон'
      
    }
   
  ])

  //mask
  let selector = document.querySelector('#phone')
  let im = new Inputmask('+7(999)999-99-99')
  im.mask(selector)
//swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:{
      
      0:{
        direction: 'horizontal',
      },
      600:{
        direction: 'vertical',
      }
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
  
 
})






  // Navigation arrows
 
  