
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
