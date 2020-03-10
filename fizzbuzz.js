// function fizzbuzz(x) {
//   let div15 = (Number.isInteger(x / 15));
//   if (Number.isInteger(x / 15));
//   return div15;
//   }
//   {
//   let div3 = (Number.isInteger(x / 3));
//   if (div3);
//   return div3;
//   }
//   {
//   let div5 = (Number.isInteger(x / 5));
//   if (div5);
//   return div5;
//   }
//   {
//   let x = document.querySelector('.resultat').value;
//   if (x);
//   return x;
// };
//
// document.querySelector('.nombre').addEventListener('input', function() {
//   let div15 = fizzbuzz(x);
//   document.querySelector('.resultat').value = 'FizzBuzz';
// });
//
// document.querySelector('.nombre').addEventListener('input', function() {
//   let div3 = fizzbuzz(x);
//   document.querySelector('.resultat').value = 'Fizz';
// });
//
// document.querySelector('.nombre').addEventListener('input', function() {
//   let div5 = fizzbuzz(x);
//   document.querySelector('.resultat').value = 'Buzz';
// });
//
// document.querySelector('.nombre').addEventListener('input', function () {
//   let x = document.querySelector('.resultat').value = x;
// });

// Cf exemple jours / competences





function fizzbuzz(x) {
  if (Number.isInteger(x / 15)) {
  document.querySelector('.resultat').value = 'FizzBuzz';
  }
  else if (Number.isInteger(x / 3)) {
    document.querySelector('.resultat').value = 'Fizz';
  }
  else if (Number.isInteger(x / 5)) {
    document.querySelector('.resultat').value = 'Buzz';
  }
  else {
    document.querySelector('.resultat').value = x;
  }
}

document.querySelector('.nombre').addEventListener('input', function () {
  let x = document.querySelector('.nombre').value;
  fizzbuzz(x);
});
