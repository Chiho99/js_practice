console.log('-----01_basic-----');
console.log('-----1.-----');
console.log('Hello World');

console.log('-----2.-----');
let name = 'Seedkun';
console.log(`変数nameの中身:${name}`);

console.log('-----3.-----');
let lastName = 'yamada';
let firstName = 'hanako';
console.log(lastName+firstName);

console.log('-----4.-----');
let a = 10;
let b = 2;
console.log(a + b);

console.log('-----5.-----');
console.log(a - b);
console.log('-----6.-----');
console.log(a * b);
console.log('-----7.-----');
console.log(a / b);

console.log('-----8.-----');
let c = 10;
let d = 3;
console.log(c % d);

console.log('-----9.-----');
let e = 11;
let f = 13;
let g = e * f;
console.log(g);
console.log('-----10.-----');
let x = 2;
console.log(x);
console.log(x * x);
console.log(x * x * x);

console.log('-----02_if-----');
console.log('-----11.-----');
x = 20;
let y = 10;
if(x>y){
    console.log('xはyより大きい。');
}

console.log('-----12.-----');
x = 15;
y = 30;
if(x >= y){
    console.log('xはy以上');
}else{
    console.log('xはyより小さい');
}

console.log('-----13.-----');
x = 12;
y = 15;
if(x > y){
    console.log('xはyより大きい');
}else if(x < y){
    console.log('xはyより小さい');
}else{
    console.log('xとyは等しい');
}

console.log('-----14.-----');
x = 2;
if(x % 2 == 0){
    console.log('偶数です');
}else{
    console.log('奇数です');
}

console.log('-----15.-----');
x = 25;
if(x % 3 == 0){
    console.log(`${x}は3の倍数です。`);
}else if(x % 5 == 0){
    console.log(`${x}は5の倍数です。`);
}else{
    console.log(`${x}は3と5の倍数以外です`);
}

console.log('-----16.-----');
x = 20;
if(x >= 10 && x <= 20){
    console.log(`${x}は10以上かつ20以下です`);
}

console.log('-----17.-----');
x = 12;
if(x >= 100 || x <= 10){
    console.log(`${x}は100以上または10以下です`);
}

console.log('-----18.-----');
x = 'セブアノ語';
if(x === '日本語'){
    console.log('ありがとう');
}else if(x === '英語'){
    console.log('thank you');
}else if(x === 'セブアノ語'){
    console.log('salamat');
}else{
    console.log('わかりません');
}

console.log('-----19.-----');
x = '男';
switch(x){
    case '男':
        console.log('male');
        break;
    case '女':
        console.log('female');
    default:
        console.log('性別不詳');
}

console.log('-----20.-----');
x = 9;
switch(x){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('月が存在しません');
        break;
}
