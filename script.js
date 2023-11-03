const hbm = document.getElementById('hbm');
const mbe =document.getElementById('mbe');
let isHbmOpen=false;

hbm.addEventListener('click',()=>{
    if(isHbmOpen){
        hbm.style.backgroundColor='#83050F';
        mbe.style.height='0%';
        document.body.style.overflow = 'auto';
    }
    else{
        hbm.style.backgroundColor='#5A0307';
        mbe.style.height='50%';
        document.body.style.overflow='hidden';
    }
    isHbmOpen=!isHbmOpen;
})

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:true,
    effect:'fade',
    spaceBetween:'0',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });