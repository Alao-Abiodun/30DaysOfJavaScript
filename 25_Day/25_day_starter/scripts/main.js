let subtitleParagraph = document.querySelector('.subtitle');
let feedbackParagraph = document.querySelector('.feedback');

feedbackParagraph.textContent = `Currently, we have ${countries.length} countries`;
feedbackParagraph.style.textAlign = 'center';
feedbackParagraph.style.fontSize = '20px'
feedbackParagraph.style.color = 'gray';
feedbackParagraph.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'

const styleButton = () => {
    let graphButton = document.querySelector('.graph-buttons');
    let buttonPopulation = document.querySelector('.population');
    let buttonLanguage = document.querySelector('.languages');

    graphButton.style.textAlign = 'center';

    buttonPopulation.style.backgroundColor = 'orange';
    buttonLanguage.style.backgroundColor = 'orange';
    buttonPopulation.style.border = 'none';
    buttonLanguage.style.border = 'none';
    buttonPopulation.style.borderRadius = '2px';
    buttonLanguage.style.borderRadius = '2px';
    buttonPopulation.style.width = '120px'
    buttonPopulation.style.height = '35px';
    buttonPopulation.style.textTransform = 'uppercase';
    buttonLanguage.style.width = '120px'
    buttonLanguage.style.height = '35px';
    buttonLanguage.style.textTransform = 'uppercase';
    buttonPopulation.style.padding = '10px';
    buttonLanguage.style.padding = '10px';
}

styleButton();