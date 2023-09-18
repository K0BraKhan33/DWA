//script.js
/*
total input is odd : 
1 0 = 1
0 1 = 1
0 0 = 0
1 1 = 
*/
export function inOdd(input1, input2) {

    if (input1 === input2) {
        return 0
    }
    else {
        return 1
    }

}

/*
total input is odd : 
1 0 = 0
0 1 = 0
0 0 = 1
1 1 = 1
*/
export function inAnd(input1, input2) {


    if (input1 === 1) {

        if (input2 === 1) {
                return 1
        }
        else {
            return 0
        }
    }
    else {
        return 0
    }

}



export function display(shower) {
    console.log(shower)
}

display(inAnd(0, 1))
display(inOdd(0, 1))
