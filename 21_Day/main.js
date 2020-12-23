// EXERCISE LEVEL 1
// Q1
const firstParagraph = document.getElementsByTagName('p')[0];
console.log(firstParagraph);
// Q2
const newFirstParagraph = document.querySelector('#first-paragraph');
const secondParagraph = document.querySelector('#second-paragraph');
const thirdParagraph = document.querySelector('#third-paragraph');
const fourtParagraph = document.querySelector('#fourth-paragraph');
console.log(newFirstParagraph);
console.log(secondParagraph);
console.log(thirdParagraph);
console.log(fourtParagraph);
// Q3
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);
// Q4
for (const p of allParagraphs) {
  console.log(p.textContent);
}
// Q5
// allParagraphs[allParagraphs.length - 1].textContent = 'Fourth Paragraph';
// Q6
allParagraphs.forEach(paragraph => {
  // paragraph.className = 'paragraph';
  // paragraph.setAttribute('class', 'paragraph');
  paragraph.classList.add('paragraph');
});

// EXERCISE LEVEL 2
// Q1
allParagraphs.forEach((paragraph, index) => {
  if (index === 0) {
    paragraph.style.color = 'white';
    paragraph.style.background = 'red';
    paragraph.style.border = '2px solid black';
    paragraph.style.fontSize = '24px';
    paragraph.style.fontFamily = 'Arial Helveitca san-serif';
  } else if (index === 1) {
    paragraph.style.color = 'white';
    paragraph.style.background = 'green';
    paragraph.style.border = '2px solid black';
    paragraph.style.fontSize = '24px';
    paragraph.style.fontFamily = 'Arial Helveitca san-serif';
  } else if (index === 2) {
    paragraph.style.color = 'white';
    paragraph.style.background = 'blue';
    paragraph.style.border = '2px solid black';
    paragraph.style.fontSize = '24px';
    paragraph.style.fontFamily = 'Arial Helveitca san-serif';
  } else {
    paragraph.style.color = 'white';
    paragraph.style.background = 'purple';
    paragraph.style.border = '2px solid black';
    paragraph.style.fontSize = '24px';
    paragraph.style.fontFamily = 'Arial Helveitca san-serif';
  }
});
// Q2
allParagraphs.forEach((paragraph, index) => {
  if (index % 2 === 0) {
    paragraph.style.color = 'green';
  } else {
    paragraph.style.color = 'red';
  }
});
// Q3
allParagraphs.forEach((paragraph, i) => {
  if (i === 0) {
    paragraph.textContent = 'First Paragraph of 30DaysOfJavaScript';
    paragraph.setAttribute('id', 'newParagraph1');
    paragraph.setAttribute('class', 'para1');
  } else if (i === 1) {
    paragraph.textContent = 'Second Paragraph of 30DaysOfJavaScript';
    paragraph.setAttribute('id', 'newParagraph2');
    paragraph.setAttribute('class', 'para2');
  } else if (i === 2) {
    paragraph.textContent = 'Third Paragraph of 30DaysOfJavaScript';
    paragraph.setAttribute('id', 'newParagraph3');
    paragraph.setAttribute('class', 'para3');
  } else {
    paragraph.textContent = 'Fourth Paragraph of 30DaysOfJavaScript';
    paragraph.setAttribute('id', 'newParagraph4');
    paragraph.setAttribute('class', 'para4');
  }
});

// EXERCISE LEVEL 3
//  Q1

const wrapper = document.querySelector('.wrapper');
let headingOne = document.querySelector('h1');
let yearContent = headingOne.textContent;
let newYearContent = yearContent.replace('2020', '<span id="year">2020</span>');
headingOne.innerHTML = newYearContent;

let year = document.querySelector('#year');
year.style.fontSize = '60px';

let changeYearColor = () => {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  year.style.color = `#${randomColor}`;
};
setInterval(changeYearColor, 2000);

console.log(year);
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';

console.log(wrapper);
