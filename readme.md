

### My Readme File...

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans-01::

getElementById("id") → Selects a single element by its unique id. Always returns one element.

getElementsByClassName("class") → Selects all elements with a given class. Returns an HTMLCollection (live list, not an array).

querySelector("selector") → Returns the first element that matches a CSS selector (e.g. .class, #id, div > p).

querySelectorAll("selector") → Returns all elements matching the CSS selector as a NodeList (static list, array-like).

---
## 2. How do you create and insert a new element into the DOM?

### Ans-02::

You can create a new element using document.createElement() and then insert it into the DOM using methods like appendChild(), prepend(), before(), or after().

Example
const newDiv = document.createElement("div");  
newDiv.textContent = "Hello World!";  
document.body.appendChild(newDiv);

## 3. What is Event Bubbling and how does it work?

### Ans-03::

Event Bubbling is the process where an event starts from the target element and propagates upwards through its ancestors (parent → grandparent → etc.).

Example: If you click a button inside a <div>, the click event fires on the button first, then bubbles up to the <div>, then to the <body>, and so on.

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Ans-04::
Event Delegation means attaching an event listener to a parent element instead of multiple child elements.
When an event bubbles up, the parent can check which child triggered it using event.target.

You don’t need to attach listeners to every child (performance friendly).

Works even if new child elements are added dynamically.

Example >> document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    console.log("Child clicked:", e.target.textContent);
  }
});

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### Ans-05::
preventDefault() → Prevents the default behavior of an element.

Example: Prevent a form from submitting or a link from navigating.

stopPropagation() → Stops the event from bubbling up (or capturing down).

Example: A click event won’t reach parent elements.

Often used together, but they solve different problems.

---
