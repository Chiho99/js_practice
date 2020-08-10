console.log('-----get_element_01-----');
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

console.log('-----edit_element_02-----');
let blueEl = document.getElementById('blue');
let text = blueEl.textContent;
blueEl.textContent = '青';
console.log(blueEl);
blueEl.style.color = 'blue';
console.log(blueEl);
blueEl.classList.add('blue');
console.log(blueEl);
blueEl.classList.remove('red');
console.log(blueEl);

let inputText = document.querySelector('#iput-text');
// input.value = "test";
console.log(inputText);

console.log('-----add_event_03-----');
let string = document.querySelector('#text');
string.addEventListener('mouseover', function(){
    this.style.color = 'pink';
    this.style.fontSize = '20px';
})

string.addEventListener('mouseleave', function(){
    this.style.color = '';
})

let input = document.querySelector('#input-text');
input.addEventListener('change', function(){
    console.log(this.value);
    alert('入力欄が変更されました');
})

let btn = document.querySelector('click', function(){
    string.textContent = input.value;
})