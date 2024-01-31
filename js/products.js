
const heartIcons = document.querySelectorAll('#heart');

heartIcons.forEach(function (heartIcon) {
  heartIcon.addEventListener('click', function() {
    if (heartIcon.style.color === 'gray' || heartIcon.style.color === '') {
      heartIcon.style.color = 'red';
    } else {
      heartIcon.style.color = 'gray';
    }
  });
});

let carticon = document.querySelector('.cart');
let cartproducts = document.querySelector('.cartProducts');
carticon.addEventListener('click' , function(event){
  event.preventDefault();
  if(cartproducts.style.display === "block")
  {
    cartproducts.style.display = "none";
  }
  else
  {
    cartproducts.style.display = "block"
  }
})
