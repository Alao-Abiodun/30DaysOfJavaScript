let headingOne = document.querySelector('h1');
headingOne.textContent = 'world countries list';
headingOne.style.color = '#ffffff';
headingOne.style.textAlign = 'center';
headingOne.style.textTransform = 'uppercase';
headingOne.style.letterSpacing = '6px';
headingOne.style.fontSize = '45px';

let headingFive = document.querySelector('h5');
headingFive.textContent = `Total Number of countries: ${countries.length}`
headingFive.style.color = '#ffffff';
headingFive.style.textAlign = 'center';
headingFive.style.fontSize = '18px'

let btn = document.querySelectorAll('.btn');
btn.forEach(b => {
    b.style.textTransform = 'uppercase';
    b.style.color = '#ffffff';
    b.style.border = 'none';
    b.style.padding = '10px'
    b.style.fontSize = '12px';
});


let btnStartingWord = document.querySelector('.btn-starting-word');
btnStartingWord.textContent = 'starting word';
btnStartingWord.style.backgroundColor = '#b704f8';


let btnSearchingWithAnyWord = document.querySelector('.btn-search-with-any-word');
btnSearchingWithAnyWord.textContent = 'search with any word';
btnSearchingWithAnyWord.style.backgroundColor = '#b704f8';



let btnShuffleFromAToZ = document.querySelector('.btn-shuffle-from-a-to-z');
btnShuffleFromAToZ.textContent = 'Shuffle from A to Z'
btnShuffleFromAToZ.style.backgroundColor = '#b704f8'


let div = document.querySelector('div');
div.style.textAlign = 'center';

let letterInput = document.querySelector('.starting-letter');
letterInput.style.marginTop = '20px';
letterInput.style.width = '600px';
letterInput.style.height = '35px'
letterInput.style.borderRadius = '20px'
letterInput.style.border = 'none';
console.log(letterInput);


const startingWord = () => {
    letterInput.addEventListener('input', e => {
       console.log(e.target);
    })
 }
 
 startingWord();







