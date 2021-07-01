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

let headingTwo = document.querySelector('h2');
headingTwo.style.textDecoration = 'underline';
let div = document.createElement('div');
div.style.fontSize = '20px';
div.style.width = '300px';
div.style.marginTop = '5px';
div.style.border = '1px solid black';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.height = '40px';
let mydate = new Date();
let month = mydate.getMonth() + 1;
let day = mydate.getDate();
let newyear = mydate.getFullYear();
let hours = mydate.getHours();
let minutes = mydate.getMinutes();
let seconds = mydate.getSeconds();
let fullCalendarDate = `${month} ${day}, ${newyear} ${hours}:${minutes}:${seconds}`;
div.innerText = fullCalendarDate;

headingTwo.appendChild(div);

let createDateContainerBackground = () => {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  div.style.backgroundColor = `#${randomColor}`;
};
setInterval(createDateContainerBackground, 2000);

let challengeList = () => {
  let allChanllenge = document.querySelectorAll('li');
  let challengeArray = [...allChanllenge];
  challengeArray.map(element => {
    element.style.listStyle = 'none';
    element.style.width = '700px';
    element.style.height = '50px';
    element.style.marginTop = '5px';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';
    element.style.paddingLeft = '10px';
    element.style.alignItems = 'flex-start';
    if (element.textContent.includes('Done')) {
      element.style.backgroundColor = 'Green';
    } else if (element.textContent.includes('Ongoing')) {
      element.style.backgroundColor = 'Yellow';
    } else {
      element.style.backgroundColor = 'red';
    }
  });
};

challengeList();

wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';
