// ./js/class_call.js
import { incNumber } from './index1.js'; 
import { decrNumber }from './index2.js';
import { reNumber } from './index3.js';

export const display = document.querySelector('h1');


const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');


button1.addEventListener('click', incNumber); 
button2.addEventListener('click', decrNumber); 
button3.addEventListener('click', reNumber); 