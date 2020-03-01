const playerDetails = document.querySelector('#player-details');
const inputs = document.querySelectorAll('input[type="text"]');
const button = document.querySelector('button');
const tableData = document.createElement('td');
const tableRow = document.createElement('tr'); 


inputs.forEach((input, e) => {
    input.addEventListener('focus', (e) => {
        e.target.style.border = '1px solid red';
    })
})





