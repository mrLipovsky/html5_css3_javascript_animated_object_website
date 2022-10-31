const cards = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
    observer.observe(el);
});

var button = document.querySelector('button');
var logo = document.getElementById('header__logo');

// button.onclick = 
// function changeColor(){
//   if(logo.style.background == 'orange'){
//     logo.style.background = 'blue';
//   }else if(logo.style.background == 'blue'){
//     logo.style.background = 'green';
//   }else if(logo.style.background == 'green'){
//     logo.style.background = 'black'
//   }else if(logo.style.background == 'black'){
//     logo.style.background = 'orange'
//   }
// }

function changeColor(){
  switch(logo.style.background){
     case 'orange':
      logo.style.background = 'blue';
      brake;

      case 'blue':
      logo.style.background = 'green';
      brake;
      
      case 'green':
      logo.style.background = 'black';
      brake;
      
      case 'black':
      logo.style.background = 'orange';
      brake;

      default:
      logo.innerHTML = 'red';

  }
}


