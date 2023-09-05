// class_call.js
import { incNumber } from './js/index1.js'; 
import{ decNumber }from './js/index2.js';

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
export const Display = document.querySelector('h1');

button1.addEventListener('click', incNumber); // Attach the incNumber function
button2.addEventListener('click', decNumber); // Attach the decNumber function (from index2.js)
