let body = document.querySelector('body');
body.setAttribute('style', 'background: #ffffff, text-align: center');
let headingOne = document.querySelector('h1');
let headingTwo = document.querySelector('h2');
let headingThree = document.querySelector('h3');
let divWrapper = document.querySelector('.wrapper');
divWrapper.style.backgroundColor = 'none';
headingOne.style.textAlign = 'center';
headingTwo.style.textAlign = 'center';
headingThree.style.textAlign = 'center';

let numArray = () => {
  let num = [];
  for (i = 0; i <= 101; i++) {
    num.push(i);
  }
  return num;
};

let primeNumbers = num => {
  if (num % 2 == 0 || num % 2 == 1) {
    return false;
  } else {
    for (x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
};

let createTable = numOfRows => {
  var data = numArray();

  let count = 0;

  let table = document.createElement('table');
  let row = table.insertRow();

  table.setAttribute('id', 'tableNumber');
  table.setAttribute('align', 'center');

  for (var i of data) {
    var cell = row.insertCell();
    if (i % 2 === 0) {
      cell.innerHTML = i;
      cell.setAttribute('style', 'background-color: green; font-size: 40px');
      cell.classList = 'tabledata even';
    } else {
      cell.innerHTML = i;
      cell.setAttribute('style', 'background-color: yellow; font-size: 40px');
      cell.classList = 'tabledata odd';
    }
    if (primeNumbers(i) === true) {
      cell.innerHTML = i;
      cell.setAttribute('style', 'background-color: red; font-size: 40px');
      cell.classList = 'tabledata prime';
    }

    count++;
    if (count % numOfRows === 0) {
      row = table.insertRow();
    }
  }

  divWrapper.appendChild(table);

  let tdStyle = document.querySelectorAll('.tabledata');
  for (item of tdStyle) {
    item.style.padding = '0.5em';
    item.style.width = '100px';
    item.style.border = '0.5px solid black';
    item.style.textAlign = 'center';
    item.style.fontSize = '25px';
  }
};
createTable(6);
