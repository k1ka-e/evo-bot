// Модальные окна

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};


span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// function setCursorPosition(pos, e) {
//   e.focus();
//   if (e.setSelectionRange) e.setSelectionRange(pos, pos);
//   else if (e.createTextRange) {
//     var range = e.createTextRange();
//     range.collapse(true);
//     range.moveEnd("character", pos);
//     range.moveStart("character", pos);
//     range.select();
//   }
// }

// function mask(e) {
//   //console.log('mask',e);
//   var matrix = this.placeholder, // .defaultValue
//     i = 0,
//     def = matrix.replace(/\D/g, ""),
//     val = this.value.replace(/\D/g, "");
//   def.length >= val.length && (val = def);
//   matrix = matrix.replace(/[_\d]/g, function (a) {
//     return val.charAt(i++) || "_";
//   });
//   this.value = matrix;
//   i = matrix.lastIndexOf(val.substr(-1));
//   i < matrix.length && matrix != this.placeholder
//     ? i++
//     : (i = matrix.indexOf("_"));
//   setCursorPosition(i, this);
// }
// window.addEventListener("DOMContentLoaded", function () {
//   var input = document.querySelector("#phone");
//   input.addEventListener("input", mask, false);
//    input.focus();
//   setCursorPosition(3, input);
// });



// модфльное окно input
$("#phone_modal").mask("+998 (99) 999-99-99",{autoclear: false});
