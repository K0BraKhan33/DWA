class Counter {

value=1;
increase(amount){
this.value+=amount||1;
}
decrease(amount){
    this.value-=amount||1;
}
display(){
    console.log(this.value);
}
}
const example=new Counter();

example.increase()