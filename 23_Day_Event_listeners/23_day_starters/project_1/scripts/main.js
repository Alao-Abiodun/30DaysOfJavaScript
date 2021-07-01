const headingOne = document.querySelector('h1');
const headingTwo = document.querySelector('h2');
const headingThree = document.querySelector('h3');
const wrapperClass = document.querySelector('.wrapper');
const bigDiv = document.querySelector('.big-div');
const numberInput = document.querySelector('.number-inputs');
const linkButton = document.querySelector('.btn-generate-number');

headingOne.style.textAlign = 'center';
headingTwo.style.textAlign = 'center';
headingThree.style.textAlign = 'center';
wrapperClass.style.textAlign = 'center';
bigDiv.style.marginTop = '10px';
numberInput.style.width = '550px';
numberInput.style.height = '35px';
numberInput.style.border = '2px solid green';
numberInput.style.opacity = '0.7';
numberInput.style.borderRadius = '4px';
linkButton.textContent = 'Generate Numbers';
linkButton.style.textDecoration = 'none';
linkButton.style.backgroundColor = 'green';
linkButton.style.opacity = '0.7';
linkButton.style.padding = '12px';
linkButton.style.marginLeft = '10px';
linkButton.style.color = 'white';
linkButton.style.width = '100px';
linkButton.style.height = '35px';

let generateRandomNumber = () => {
  linkButton.addEventListener('click', e => {
    let num = [];
    let number = numberInput.value;
    for (i = 0; i <= number; i++) {
      num.push(i);
    }
    return num;
  });
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
  var data = generateRandomNumber();

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

  bigDiv.appendChild(table);

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
