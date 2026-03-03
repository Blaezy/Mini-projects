const cards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer scope even after the outer function has finished executing. It allows inner functions to remember variables from their enclosing scope.",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "== checks for equality with type coercion, meaning it converts types before comparing. === checks for strict equality, requiring both value and type to match without any conversion.",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that handles asynchronous operations. It continuously checks the call stack and the task queue, pushing queued callbacks onto the stack when it is empty.",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned a value. null is an intentional assignment representing no value. Both are falsy but they are not strictly equal.",
  },
  {
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected, and supports chaining via .then() and .catch().",
  },
  {
    question: "What is the difference between arrow functions and regular functions?",
    answer:
      "Arrow functions do not have their own 'this' binding — they inherit it from the surrounding scope. They also cannot be used as constructors and do not have an 'arguments' object.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution. var declarations are hoisted and initialized as undefined, while let and const are hoisted but not initialized.",
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code runs line by line, blocking execution until each operation completes. Asynchronous code allows other operations to run while waiting, using callbacks, promises, or async/await to handle results later.",
  },
  {
    question: "What is prototypal inheritance in JavaScript?",
    answer:
      "Prototypal inheritance is a mechanism where objects can inherit properties and methods from other objects through a prototype chain. Every JavaScript object has a prototype from which it can inherit behavior.",
  },
  {
    question: "What is the difference between map(), filter(), and reduce()?",
    answer:
      "map() transforms each element and returns a new array of the same length. filter() returns a new array with only elements that pass a condition. reduce() accumulates all elements into a single value.",
  },
  {
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into individual variables. It makes code shorter and more readable when working with complex data structures.",
  },
  {
    question: "What is the spread operator and what is it used for?",
    answer:
      "The spread operator (...) expands an iterable like an array or object into individual elements. It is commonly used to copy arrays, merge objects, and pass array elements as function arguments.",
  },
  {
    question: "What is async/await in JavaScript?",
    answer:
      "async/await is syntactic sugar built on top of Promises. Marking a function as async allows you to use await inside it, which pauses execution until the Promise resolves, making asynchronous code read like synchronous code.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of nodes. JavaScript can use it to read, add, remove, and modify elements and their attributes dynamically.",
  },
  {
    question: "What is event bubbling?",
    answer:
      "Event bubbling is when an event triggered on a child element propagates upward through its parent elements. You can stop this behavior using event.stopPropagation() and prevent default actions with event.preventDefault().",
  },
  {
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "Both store key-value pairs in the browser, but localStorage persists until explicitly cleared while sessionStorage is cleared when the browser tab is closed. Neither should be used for sensitive data.",
  },
  {
    question: "What are higher-order functions?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return a function as their result. Common examples include map(), filter(), reduce(), and setTimeout().",
  },
  {
    question: "What is the difference between call(), apply(), and bind()?",
    answer:
      "All three set the 'this' context of a function. call() invokes it immediately with arguments listed individually, apply() invokes it immediately with arguments as an array, and bind() returns a new function with 'this' permanently set.",
  },
  {
    question: "What is a pure function?",
    answer:
      "A pure function always returns the same output for the same input and has no side effects — it does not modify external variables, make API calls, or interact with the DOM. Pure functions are predictable and easy to test.",
  },
];

const percentageElement = document.querySelector(".js-percentage");
const questionNumberElement = document.querySelector(".js-question-number");

const questionAnswerElement = document.querySelector(".js-question-answer");

const previousButtonElement = document.querySelector(".js-previous-button");
const nextButtonElement = document.querySelector(".js-next-button");

const showHideAnswerElement = document.querySelector(".js-show-hide-answer");
const progressBar = document.querySelector(".top-bar-question");

let currentQuestion = 1;
const totalQuestion = cards.length;
let percentage = Math.round((currentQuestion / totalQuestion) * 100);
percentageElement.innerHTML = `${percentage}%`;
questionNumberElement.innerHTML = `${currentQuestion} of ${totalQuestion}`;
questionAnswerElement.innerHTML = cards[currentQuestion - 1].question;
progressBar.style.setProperty("--progress", `${percentage}%`);

previousButtonElement.addEventListener("click", () => {
  currentQuestion--;
  renderPropertise(1, previousButtonElement, nextButtonElement);
});
nextButtonElement.addEventListener("click", () => {
  currentQuestion++;
  renderPropertise(totalQuestion, nextButtonElement, previousButtonElement);
});

function renderPropertise(endValue, element, oppositeElement) {
  if (currentQuestion > 0 && currentQuestion <= totalQuestion) {
    let index = currentQuestion - 1;
    let percentage = Math.round((currentQuestion / totalQuestion) * 100);
    questionAnswerElement.innerHTML = cards[index].question;
    showHideAnswerElement.innerHTML = "Show Answer";
    isAnswerhidden = true;
    questionAnswerElement.classList.remove('text-small');
    questionAnswerElement.classList.add('text-large');
    questionNumberElement.innerHTML = `${currentQuestion} of ${totalQuestion}`;
    percentageElement.innerHTML = `${percentage}%`;
    progressBar.style.setProperty("--progress", `${percentage}%`);
    oppositeElement.style.color = "rgba(0, 0, 0, 0.7)";
  } else {
    element.style.color = "red";
    currentQuestion = endValue;
  }
}

let isAnswerhidden = true;

showHideAnswerElement.addEventListener("click", () => {
  let index = currentQuestion - 1;
  if (isAnswerhidden) {
    showHideAnswerElement.innerHTML = "Hide Answer";
    questionAnswerElement.innerHTML = cards[index].answer;
    questionAnswerElement.classList.add('text-small');
    questionAnswerElement.classList.remove('text-large');
    isAnswerhidden = false;
  } else {
    showHideAnswerElement.innerHTML = "Show Answer";
    questionAnswerElement.innerHTML = cards[index].question;
    questionAnswerElement.classList.remove('text-small');
    questionAnswerElement.classList.add('text-large');
    isAnswerhidden = true;
  }
});
