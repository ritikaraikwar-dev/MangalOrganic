// header

const header = document.querySelector('.header')

window.addEventListener('scroll',()=>{

    if(window.scrollY>=100){

        header.classList.add('header-scroll')
    }
    else if(window.scrollY<100){

        header.classList.remove('header-scroll')

    }
})




// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    gapCursor: true,
    autoplay:{
        delay:1500,
        disableOnInteraction:false
      },
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

    breakpoints:{

        0: {
          slidesPerView:2
        },
  
        576: {
          slidesPerView:3
        },
  
        768: {
          slidesPerView:4
        },
  
        1200: {
          slidesPerView:5
        },
      }

  });







   