const hbm = document.getElementById('hbm');
const mbe =document.getElementById('mbe');
let hbml = document.querySelectorAll(".hbm-l");
let isHbmOpen=false;

hbm.addEventListener('click',()=>{
    if(isHbmOpen){
        hbm.style.backgroundColor='#fff';
        mbe.style.height='0%';
        hbml.forEach(function(element) {
          element.style.backgroundColor = "#005a7e";
        });
        document.body.style.overflow = 'auto';
    }
    else{
        hbm.style.backgroundColor='#005a7e';
        mbe.style.height='50%';
        hbml.forEach(function(element) {
          element.style.backgroundColor = "#fff";
        });
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