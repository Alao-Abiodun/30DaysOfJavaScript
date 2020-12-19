let body = document.querySelector('body');

const styleHeadingOne = () => {
    let headingOne = document.querySelector('h1');
    headingOne.style.color = 'white'
    headingOne.style.textAlign = 'center'
    headingOne.style.fontFamily = 'Montserrat'
}

const styleFlexContainer = () => {
    let flexContainer = document.querySelector('.flex-container');
    flexContainer.style.display = 'flex';
    flexContainer.style.justifyContent = 'center';
    let description = document.querySelector('.description');
    description.style.backgroundColor = 'white';
    description.style.opacity = '0.2';
    description.style.width = '200px';
    description.style.textAlign = 'center'
    description.style.paddingTop = '10px';
    description.style.paddingBottom = '10px'
    description.style.height = '100px';
    description.style.marginTop = '150px'
    description.style.marginLeft = '40px'
    description.style.visibility = 'hidden'
    let imageFlex = document.querySelector('.image');
    let planetImage = document.querySelector('.planet-image');
    planetImage.style.width = '300px';
    imageFlex.style.marginTop = '60px'
}

const styleFormElement = () => {
    let header = document.querySelector('header');
    header.style.textAlign = 'center';
    let massInput = document.querySelector('#mass')
    massInput.style.height = '30px';
    let selectInput = document.querySelector('select')
    selectInput.style.height = '36px';
    selectInput.style.textTransform = 'uppercase';
    selectInput.style.borderRadius = '3px';
    selectInput.style.opacity = '0.9';
    let buttonCalculateWeight = document.querySelector('button')
    buttonCalculateWeight.style.height = '36px';
    buttonCalculateWeight.style.color = 'black'
    buttonCalculateWeight.style.opacity = '0.7';

    console.log(massInput);
}

const calculateWeightOfObjectOnPlanet = (gravit) => {
    let massInput = document.querySelector('#mass')
    let selectInput = document.querySelector('select');
    let buttonCalculateWeight = document.querySelector('button')
    buttonCalculateWeight.addEventListener('click', e => {

        if (massInput.value === '') {
            console.log('Mass is required');
        } else {
            let weight;
            let description = document.querySelector('.description');
            let imageFlex = document.querySelector('.image');
            description.style.visibility = 'visible';
            description.style.fontWeight = 'bolder';
            description.style.fontSize = '24px'
            switch (selectInput.value) {
                case 'mercury':
                    weight = massInput.value * 3.7;
                    break;
                case 'venus':
                    weight = massInput.value * 8.9;
                    break;
                case 'earth':
                    weight = (massInput.value * 9.8).toFixed(2);
                    description.textContent = weight;
                    break;
                case 'mars':
                    weight = massInput.value * 3.7;
                    break;
                case 'jupiter':
                    weight = massInput.value * 25;
                    break;
                case 'saturn':
                    weight = massInput.value * 10;
                    break;
                case 'uranus':
                    weight = massInput.value * 8.9;
                    break;
                case 'neptune':
                    weight = massInput.value * 11;
                    break;
                default:
                    weight = massInput.value * 0.6;
                    break;
            }


        }
    })
}

styleHeadingOne();
styleFormElement();
styleFlexContainer();
calculateWeightOfObjectOnPlanet();  
