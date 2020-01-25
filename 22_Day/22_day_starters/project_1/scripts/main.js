let headingOne = document.querySelector('h1');
let headingTwo = document.querySelector('h2');
let headingThree = document.querySelector('h3');

headingOne.style.textAlign = 'center';
headingTwo.style.textAlign = 'center';
headingTwo.style.textDecoration = 'underline';
headingThree.style.textAlign = 'center';
headingThree.style.textDecoration = 'underline';

const NumberGenerator = () => {
  let classWrapper = document.querySelector('.wrapper');
  for (let i = 0; i <= 101; i++){
    const smallDiv = document.createElement('div');
    smallDiv.textContent = i;
    if(smallDiv.textContent % 2 === 0){
      smallDiv.style.backgroundColor = 'green';
    } else if(smallDiv.textContent % 2 === 1) {
      smallDiv.style.backgroundColor = 'yellow';
    } else {
      for (let i = 100; i < smallDiv.textContent; i++){
        if (smallDiv.textContent % i !== 0) {
          smallDiv.style.backgroundColor = 'red';
        }
      }
    }
    smallDiv.style.width = '50px';
    smallDiv.style.display = 'inline-block';
    smallDiv.style.border = '2px solid black';
    smallDiv.style.margin = '3px';
    smallDiv.style.padding = '80px';
    classWrapper.appendChild(smallDiv);
  }
}
NumberGenerator()