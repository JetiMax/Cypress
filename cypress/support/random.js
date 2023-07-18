// function randomNumber(length) {
//     var text = "";
//     var possible = "123456789";
//     for (var i = 0; i < length; i++) {
//         var sup = Math.floor(Math.random() * possible.length);
//         text += i > 0 && sup == i ? "0" : possible.charAt(sup);
//     }
//     return Number(text);
// }
// console.log()


let resultInput = document.querySelector('#telephoneno');
let button = document.querySelector('#telephoneno');

button.addEventListener('click', function() {
    let result = '';
    let str = '0123456789';

    for (let i = 0; i < 16; i++) {
        result += str[getRandom(0, str.length - 1)];
        console.log(result);
        console.log(i);
    }

    resultInput.value = result;
});

function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}