// scripts.js

/*
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
}); */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  console.clear;


  try {


    //2
    if (dividend === "" || divider === "") {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      throw new Error("Both values are required in inputs. Try again.")
   }


    //3
    if (isNaN(dividend) || isNaN(divider)) {
      document.body.innerHTML = "Something critical went wrong. Please reload the page.";
      throw new Error('Invalid input provided.');
    }



    //4
    if (divider < "0") {
      result.innerText = "Division not performed. Division by zero is not allowed.";
      throw new Error('Division by zero is not allowed.')
    }


    //1
    const quotient = dividend / divider;
    if (!Number.isNaN(quotient) && Number.isInteger(quotient)) {
      result.innerText = quotient;
    } 
    else {
      result.innerText = "Division not performed. Result is not a whole number.";
      throw new Error('Result is not a whole number.')
    }
     } 

catch (error) {
    console.error(error);
  }
  
});
