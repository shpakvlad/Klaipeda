// let acc = document.querySelectorAll(".accordion");
// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

document.querySelector('.order-form__button-submit')
      .addEventListener('click', function(e) {
       e.preventDefault();
       alert('Your order has been submitted successfully.');
      }) ;

let hiddenMenu = document.querySelector('.bar__menu-hidden');
document.querySelector('.bar__menu__icon-hidden')
      .addEventListener('click', function(e) {
        if (hiddenMenu.style.display === "block") {
          hiddenMenu.style.display = "none";
        } else {
          hiddenMenu.style.display = "block";
        }
      });

let hiddenItem = document.querySelectorAll('.menu__item-hidden');
for (let i = 0; i < hiddenItem.length; i++) {
  hiddenItem[i].addEventListener('click', function() {
    hiddenMenu.style.display = "none";
  })
}
