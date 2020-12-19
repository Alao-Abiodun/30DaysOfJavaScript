// EXERCISE LEVEL 3
//  DOM : Mini project 1
const wrapper = document.querySelector('.wrapper');
wrapper.style.marginTop = '60px';

const headingOne = document.querySelector('h1');
headingOne.style.marginLeft = 'auto';
headingOne.style.marginRight = 'auto';
headingOne.style.textAlign = 'center';

const headingTwo = document.querySelector('h2');
headingTwo.style.textAlign = 'center';
headingTwo.style.textDecoration = 'underline';

const dateElement = document.createElement('h3');
const dateTimeFunc = () => {
    const myDate = new Date();
    let YYa = myDate.getFullYear();
    let MMa = myDate.getMonth() + 1;
    let DDa = myDate.getDate();
    let HHa = myDate.getHours();
    let mma = myDate.getMinutes();
    let ssa = myDate.getSeconds();
    return `May ${DDa}, ${YYa} ${HHa}:${mma}:${ssa}`;
}
dateElement.textContent = dateTimeFunc();
dateElement.style.border = '1px solid black';
dateElement.style.padding = '10px';
dateElement.style.width = '300px';
dateElement.style.textAlign = 'center';
dateElement.style.marginLeft = 'auto'
dateElement.style.marginRight = 'auto'
setInterval(() => {
    const value1 = Math.floor(Math.random() * 256);
    const value2 = Math.floor(Math.random() * 256);
    const value3 = Math.floor(Math.random() * 256);
    const rgbValues = `rgb(${value1},${value2},${value3})`;
    dateElement.style.background = rgbValues;
}, 1000);
dateElement.style.textDecoration = 'none';
headingTwo.appendChild(dateElement);

const yearSpan = document.querySelector('span');
yearSpan.style.fontSize = '60px';

const ul = document.querySelector('ul');
const allLists = document.querySelectorAll('li');

setInterval(() => {
    const str = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        hex += str[index];
        yearSpan.style.color = hex;
    }
}, 1000);

allLists.forEach(list => {
    if (list.textContent.endsWith('Done')) {
        list.style.width = '700px';
        list.style.marginLeft = 'auto';
        list.style.marginRight = 'auto';
        list.style.marginBottom = '5px'
        list.style.background = 'green';
        list.style.listStyle = 'none';
        list.style.padding = '12px';
    } else if (list.textContent.endsWith('Ongoing')) {
        list.style.width = '700px';
        list.style.marginLeft = 'auto';
        list.style.marginRight = 'auto';
        list.style.marginBottom = '5px'
        list.style.background = 'yellow';
        list.style.listStyle = 'none';
        list.style.padding = '12px';
    } else {
        list.style.width = '700px';
        list.style.marginLeft = 'auto';
        list.style.marginRight = 'auto';
        list.style.marginBottom = '5px'
        list.style.background = 'red';
        list.style.listStyle = 'none';
        list.style.padding = '12px';
    }

});