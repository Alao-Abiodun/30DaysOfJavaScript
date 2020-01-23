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
// let colors = ['blue', 'yellow', 'purple', 'lightgreen', 'indigo'];
// let numReg = /\d+/g;
// let headingOne = document.querySelector('h1');
// let value = headingOne.textContent;
// let extractValue = value.substr(31, 4);
// extractValue.style.color = 'red';
// console.log(value);
// console.log(extractValue);
// let year = value.match(numReg);
// let changedYear = parseInt(year);
// console.log(typeof changedYear);

const createDateTimeYearFormat = () => {
   const now = new Date();
   let month = now.getMonth() + 1;
   switch(month){
       case 1:
        month = 'January';
        break;
       case 2:
        month = 'Febraury';
        break;
       case 3:
        month = 'March';
        break;
       case 4:
        month = 'April';
        break;
       case 5:
        month = 'May';
        break;
       case 6:
        month = 'June';
        break;
       case 7:
        month = 'July';
        break   
   }
   const day = now.getUTCDate();
   const year = now.getFullYear();
   const hour = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();
   let calendar = `${month} ${day}, ${year} ${hour}:${minutes}:${seconds}`;
   console.log(calendar);
}

createDateTimeYearFormat();

let allList = document.querySelectorAll('li');
allList.forEach(list => {
    list.style.border = '0px solid black';
    list.style.fontSize = '20px';
    list.style.listStyle = 'none';
    list.style.padding = '24px';
    list.style.marginBottom = '3px';
    allList[0].style.backgroundColor = 'green';
    allList[1].style.backgroundColor = 'yellow';
    allList[2].style.backgroundColor = 'red';
    allList[3].style.backgroundColor = 'red';
    allList[4].style.backgroundColor = 'red';
    allList[5].style.backgroundColor = 'red';
    allList[6].style.backgroundColor = 'red';
})

let headingTwo = document.querySelector('h2');
headingTwo.style.textDecoration = 'underline';
headingTwo.style.textAlign = 'center';


// console.log(allList);
// console.log(headingTwo);



