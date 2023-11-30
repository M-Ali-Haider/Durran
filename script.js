const hbm = document.getElementById('hbm');
const mbe =document.getElementById('mbe');
let isHbmOpen=false;

hbm.addEventListener('click',()=>{
    if(isHbmOpen){
        hbm.style.backgroundColor='var(--main-color)';
        mbe.style.height='0%';
        document.body.style.overflow = 'auto';
    }
    else{
        hbm.style.backgroundColor='var(--header-button-hover)';
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
    pagination: {
      el: '.swiper-pagination',
      clickable:'true',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });