const stylingHeadingTwo = () => {
    let headingTwo = document.querySelector('h2');
    headingTwo.textContent = 'Alao Abiodun AbdulRahman';
    headingTwo.style.letterSpacing = '7px';
    headingTwo.style.fontFamily = 'monospace sans-serif';
    headingTwo.style.textAlign = 'center';
    headingTwo.style.fontSize = '50px';
    headingTwo.style.fontWeight = '800'
}

stylingHeadingTwo();

const changeTechSkills = () => {
    let output = document.querySelector('output');
    output.textContent = 'JavaScript';
    const skills = ['React', 'Redux', 'Node', 'Python','Mongodb', 'Pandas', 'Numpy', 'Html'];
    for (let i = 0; i < skills.length; i++) {
        setInterval(() => {
            output.textContent = skills[i];
            if (output.textContent == skills[i].length - 1) {
                output.textContent += skills[i];
            }
        }, 2000);
    }

    console.log(output);
}

changeTechSkills();
