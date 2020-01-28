let body = document.querySelector('body');

const styleHeadingOne = () => {
    let headingOne = document.querySelector('h1');
    headingOne.style.color = 'white' 
    headingOne.style.textAlign = 'center'
    // headingOne.style.fontFamily = 'Montserrat'
}

const styleFormElement = () => {
    let massInput = document.querySelector('#mass')
    let selectInput = document.querySelector('select')
    let buttonCalculateWeight = document.querySelector('button')

    console.log(massInput);
}

styleHeadingOne();
styleFormElement();
