import _ from 'lodash';
import './style.css';
import Icon from '../assets/icon.png';
import Background from '../assets/background.jpg';
import printMe from './print.js'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Adding a image
    const iconElement = new Image();
    iconElement.src = Icon;

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me to show pop up';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(iconElement);

    return element;
}

  document.body.style.backgroundImage = `url('${Background}')`;
  document.body.appendChild(component());