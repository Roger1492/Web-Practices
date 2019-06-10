// TODO: 轮播图特效
let slideContainer = document.getElementById('slide-container');
let slideImg = Array.from(document.querySelectorAll('.slide-wrap div'));
let slideIndex = -1;
setInterval(function(e){

  for(let i = 0; i < slideImg.length; i++){
    slideImg[i].style.display = 'none';
  }

  if(slideIndex > 4){
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slideImg[slideIndex].style.display = 'block';
}, 5000)