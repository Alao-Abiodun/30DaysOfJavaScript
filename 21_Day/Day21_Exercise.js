// //EXERCISE LEVEL 1

// // NO 1
// let firstParagraph = document.querySelector('p');
// //NO 2
// let firstParagraphId = document.getElementById('first-paragraph');
// let secondParagraphId = document.getElementById('second-paragraph');
// let thirdParagraphId = document.getElementById('third-paragraph');
// let fourthParagraphId = document.getElementById('fourth-paragraph');
// // NO 3
// let allParapgraph = document.querySelectorAll('p');
// // NO 4
// const paragraphTextContent = allParapgraph.forEach(paragraph => {
//     const pValue = paragraph.textContent;
//     console.log(pValue);
// })

// // NO 5
// const fourthParagraph = allParapgraph[3].textContent = 'Fourth Paragraph Changed';
// console.log(fourthParagraph);
// // NO 6
// // Adding attribute using setAttribute
// allParapgraph[0].setAttribute('class', 'paragraph');
// allParapgraph[1].setAttribute('class', 'paragraph');
// allParapgraph[2].setAttribute('id', 'new-third-paragraph');
// allParapgraph[3].setAttribute('class', 'new-fourth-paragraph');
// //Adding attribute without setAttribute
// allParapgraph[0].className = 'paragraph';
// allParapgraph[1].className = 'paragraph';
// allParapgraph[2].id = 'new-fourth-paragraph';
// allParapgraph[3].id = 'new-fourth-paragraph';


// // EXERCISE LEVEL 2

// // NO 1
// const changeParagraphStyling = allParapgraph.forEach(paragraph => {
//     paragraph.style.color = 'red';
//     paragraph.style.background = 'lightgreen';
//     paragraph.style.border = '2px solid black';
//     paragraph.style.fontSize = '24px';
//     paragraph.style.fontFamily = 'Arial';
// })

// // NO 2

// allParapgraph.forEach((paragraph, i) => {
//     return i % 2 === 1 ? paragraph.style.color = 'red' : paragraph.style.color = 'green';
// })

// EXERCISE LEVEL 3

// NO 1 MINI PROJECT 1




