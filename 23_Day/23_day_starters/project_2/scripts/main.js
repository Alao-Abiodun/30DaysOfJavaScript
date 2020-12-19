let innerWrapper = document.querySelector('.inner-wrapper');
let wrapper = document.querySelector('.wrapper');

innerWrapper.textContent = 'press any keyboard key';
innerWrapper.style.textAlign = 'center';
innerWrapper.style.fontSize = '23px';
innerWrapper.style.fontWeight = 'bolder';
innerWrapper.style.border = '1px solid black';
innerWrapper.style.boxShadow = '2px 2px 1px #888888'
innerWrapper.style.width = '250px';
innerWrapper.style.height = '30px';
innerWrapper.style.padding = '15px';
innerWrapper.style.color = 'black'
innerWrapper.style.margin = '150px auto';

let innerkeyCodeWrapper = document.createElement('div');
innerkeyCodeWrapper.style.border = '1px solid black';
innerkeyCodeWrapper.style.fontSize = '30px';
innerkeyCodeWrapper.style.fontFamily = 'sans-serif Arial Helvetica';
innerkeyCodeWrapper.style.fontWeight = 'bolder'
innerkeyCodeWrapper.style.boxShadow = '2px 2px 1px #888888';
innerkeyCodeWrapper.style.width = '120px';
innerkeyCodeWrapper.style.height = '80px';
innerkeyCodeWrapper.style.paddingTop = '40px';
innerkeyCodeWrapper.style.textAlign = 'center'
innerkeyCodeWrapper.style.marginTop = '-130px'
innerkeyCodeWrapper.style.marginRight = 'auto'
innerkeyCodeWrapper.style.marginLeft = 'auto'
innerkeyCodeWrapper.style.visibility = 'hidden';
wrapper.appendChild(innerkeyCodeWrapper);

const createKeyCodeWrapper = () => {
    document.body.addEventListener('keypress', e => {
        if (true) {
            let p = document.createElement('p');
            p.textContent = e.key;
            p.style.color = 'lighgreen';
            p.style.display = 'inline-block'
            innerWrapper.appendChild(p);
            innerWrapper.textContent = 'you pressed' + p;
            innerkeyCodeWrapper.style.color = 'lightgreen';
            innerkeyCodeWrapper.textContent = `${e.keyCode}`;
            innerkeyCodeWrapper.style.visibility = 'visible';
            console.log(e);
        }
    })
}

createKeyCodeWrapper();


