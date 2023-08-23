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


window.onerror = function(message, source, lineno, colno, error) {
  document.body.innerHTML = "Something critical went wrong. Please reload the page.";
  console.error("An error occurred:", message, "at", source, "Line:", lineno, "Column:", colno);
};

form.addEventListener("submit", (event) => {  
  event.preventDefault();
  


  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  
  
  try {


//1
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }


  //2
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    throw new Error('Invalid input provided.');
    return;
  }



//3
  if (divider === "0") {
    result.innerText = "Division not performed. Division by zero is not allowed.";
    return;
  }
  
  if (!Number.isInteger(+dividend) || !Number.isInteger(+divider)) {
    result.innerText = "Division not performed. Both values should be whole numbers.";
    return;
  }

    const quotient = dividend / divider;
    if (!Number.isNaN(quotient) && Number.isInteger(quotient)) {
      result.innerText = quotient;
    } else {
      result.innerText = "Division not performed. Result is not a whole number.";
      throw new Error('')
    }
  } catch (error) {
    result.innerText = "Division not performed. An error occurred during division.";
    console.error("An error occurred during division:", error);

  }
});
