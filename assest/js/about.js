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



 

 