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
linkButton.style.marginLeft = '10px'
linkButton.style.color = 'white';
linkButton.style.width = '100px';
linkButton.style.height = '35px';

const NumberGeneratorBasedOnInput = () => {
    const msgWrapper = document.querySelector('.msg');
    msgWrapper.style.color = 'red';
    msgWrapper.style.fontSize = '17px'
    msgWrapper.style.marginRight = '320px';
    msgWrapper.style.marginBottom = '10px';
    // msgWrapper.style.display = 'inline-block';
    linkButton.addEventListener('click', e => {
        if (numberInput.value === '') {
            msgWrapper.textContent = 'Enter the number into the input fields to generate numbers';
        } else if (isNaN(numberInput.value)) {
            msgWrapper.textContent = 'The number entered into this input field must be a number';
        } else {
            for (let i = 0; i <= numberInput.value; i++) {
                const smallDiv = document.createElement('div');
                msgWrapper.textContent = '';
                smallDiv.textContent = i;
                if (smallDiv.textContent % 2 === 0) {
                    smallDiv.style.backgroundColor = 'green';
                } else if (smallDiv.textContent % 2 === 1) {
                    smallDiv.style.backgroundColor = 'yellow';
                } else {
                    for (let i = 100; i < smallDiv.textContent; i++) {
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
                bigDiv.appendChild(smallDiv);
            }
        }
    });
}

NumberGeneratorBasedOnInput();