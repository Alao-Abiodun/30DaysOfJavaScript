const wrapper = document.querySelector('.wrapper');
const innerWrapper = document.querySelector('.inner-wrapper');

innerWrapper.textContent = 'press any keyboard key';
innerWrapper.style.border = '2px solid white';
innerWrapper.style.fontSize = '32px';
innerWrapper.style.fontWeight = 'bolder';
innerWrapper.style.backgroundColor = 'white';
innerWrapper.style.width = '350px';
innerWrapper.style.height = '30px';
innerWrapper.style.textAlign = 'center';
innerWrapper.style.paddingTop = '15px';
innerWrapper.style.paddingBottom = '20px';
innerWrapper.style.marginLeft = 'auto'
innerWrapper.style.boxShadow = '2px 2px 1px #888888';
innerWrapper.style.marginRight = 'auto';
innerWrapper.style.marginTop = '150px'

let keyCodeWrapper = document.createElement('div');
keyCodeWrapper.textContent = 'KeyCode'
keyCodeWrapper.style.backgroundColor = 'white';
keyCodeWrapper.style.width = '140px';
keyCodeWrapper.style.fontSize = '24px';
keyCodeWrapper.style.fontWeight = 'bolder';
keyCodeWrapper.style.fontFamily = 'sans-serif Arial Helvetica';
keyCodeWrapper.style.height = '80px';
keyCodeWrapper.style.border = '2px solid white';
keyCodeWrapper.style.boxShadow = '2px 2px 1px #888888';
keyCodeWrapper.style.color = 'lightgreen';
keyCodeWrapper.style.textAlign = 'center';
keyCodeWrapper.style.paddingTop = '40px';
keyCodeWrapper.style.marginTop = '30px';
keyCodeWrapper.style.marginLeft = 'auto';
keyCodeWrapper.style.marginRight = 'auto';
keyCodeWrapper.style.visibility = 'hidden';
wrapper.appendChild(keyCodeWrapper);

const keyCodeCreator = () => {
    document.body.addEventListener('keypress', e => {
        if (true) {
            let p = document.createElement('p');
            p.textContent = e.key;
            p.style.display = 'inline-block';
            p.style.color = 'lightgreen';
            console.log(p);
            innerWrapper.appendChild(p);
            innerWrapper.textContent = 'you pressed ' + p.textContent
            keyCodeWrapper.textContent = `${e.keyCode}`;
            keyCodeWrapper.style.visibility = 'visible';
            console.log(e);
        }
    })
}

keyCodeCreator();


