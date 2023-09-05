
class Counter {
#value=1;
#label=undefined;
/**
 * @param {string} label
 */

constructor(label){
    this.#label=label;
}


increase(amount){
this.#value+=amount||1;
}

decrease(amount){
    this.#value-=amount||1;
}

display(){
    console.log(`${this.#value} ${this.#label}`);
}
}
const example = new Counter("celssa");
example.display();





