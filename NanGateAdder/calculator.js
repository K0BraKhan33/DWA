//caculator.js
import { inOdd, inAnd } from './script.js';

const priBinaryArray = [0,1,1,0];
const secBinaryArray = [1, 0, 1, 0];

const midBinaryArray = [0, 0, 0, 0];
const carBinaryArray = [0, 0, 0, 0];
const finBinaryArray = [0, 0, 0, 0, 0]; // Initialize fin with all zeros

// Module 1
// 1 1
midBinaryArray[2] = inOdd(priBinaryArray[3], secBinaryArray[3]);

// Between calcl
finBinaryArray[4] = inOdd(midBinaryArray[2], carBinaryArray[3]);
midBinaryArray[3] = inAnd(priBinaryArray[3], secBinaryArray[3]);

// Carry calc
midBinaryArray[1] = inAnd(priBinaryArray[3], secBinaryArray[3]);
midBinaryArray[0] = inOdd(midBinaryArray[2], carBinaryArray[3]);
carBinaryArray[3] = inOdd(midBinaryArray[1], midBinaryArray[0]);

// 2 2
// Carry, pri
midBinaryArray[2] = inOdd(priBinaryArray[2], secBinaryArray[2]);

// Between calcl
finBinaryArray[3] = inOdd(midBinaryArray[2], carBinaryArray[3]);
midBinaryArray[3] = inAnd(priBinaryArray[2], secBinaryArray[2]);

// Carry calc
midBinaryArray[1] = inAnd(priBinaryArray[2], secBinaryArray[2]);
midBinaryArray[0] = inOdd(midBinaryArray[2], carBinaryArray[3]);
carBinaryArray[3] = inOdd(midBinaryArray[1], midBinaryArray[0]);

// 3 4
midBinaryArray[2] = inOdd(priBinaryArray[1], secBinaryArray[1]);

// Between calcl
finBinaryArray[2] = inOdd(midBinaryArray[2], carBinaryArray[2]);
midBinaryArray[3] = inAnd(priBinaryArray[1], secBinaryArray[1]);

// Carry calc
midBinaryArray[1] = inAnd(priBinaryArray[1], secBinaryArray[1]);
midBinaryArray[0] = inOdd(midBinaryArray[2], carBinaryArray[3]);
carBinaryArray[1] = inOdd(midBinaryArray[1], midBinaryArray[0]);

// 4 8
midBinaryArray[2] = inOdd(priBinaryArray[0], secBinaryArray[0]);

// Between calcl
finBinaryArray[1] = inOdd(midBinaryArray[2], carBinaryArray[2]);
midBinaryArray[3] = inAnd(priBinaryArray[0], secBinaryArray[0]);

// Carry calc
midBinaryArray[1] = inAnd(priBinaryArray[0], secBinaryArray[0]);
midBinaryArray[0] = inOdd(midBinaryArray[2], carBinaryArray[3]);
carBinaryArray[0] = inOdd(midBinaryArray[1], midBinaryArray[0]);

// 5 16 carry final
finBinaryArray[0] = carBinaryArray[0];
if (finBinaryArray===carBinaryArray){
    finBinaryArray['A']
}

console.log(`desired output pri ${priBinaryArray}; sec ${secBinaryArray}; mid ${midBinaryArray}; car ${carBinaryArray}; fin ${finBinaryArray}`);
