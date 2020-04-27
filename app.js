const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors = ['#FECE38','#49C6CF','#D7426D','#73DAAD','#E57A41'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
  let random = Math.floor(Math.random()*colors.length);  
  bodyBg.style.backgroundColor = colors[random];
}

