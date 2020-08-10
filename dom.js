let blue = document.getElementById('blue');
console.log(blue);

let green = document.getElementsByClassName('green');
console.log(green);

let li = document.getElementsByTagName('li');
console.log(li);

let color = document.querySelector('#box .color');
console.log(color);

let colors = document.querySelectorAll('#box .color');
console.log(colors);

let red = document.getElementById('red');
let ul = red.parentElement;
console.log(ul);

let box = document.getElementById('box');
let lists = box.children;
console.log(lists);