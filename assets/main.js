// welcome text script
console.log("script");
const welcome = document.querySelector(".js-text");
const blink = document.querySelector(".blink");
const leksis = ["Web Developer", "from another planet"];
let count = 0;
let index = 0;

function test() {
  welcome.innerText = leksis[count].slice(0, ++index);
  let timeout = 200;
  blink.classList.remove("blinker");

  if (index == leksis[count].length) {
    blink.classList.add("blinker");
    index = 0;
    count++;
    timeout = 1500;
  }
  if (count == leksis.length) {
    index = 0;
    count = 0;
  }

  setTimeout(() => {
    test();
  }, timeout);
}

test();

// nav script
const rotate = document.querySelector(".navigation-chev");
const ulHide = document.querySelector(".choices");

rotate.addEventListener("click", () => {
  rotate.classList.toggle("bordered");
  ulHide.classList.toggle("hiden");
});

// remaining words script
let remainWords = document.querySelector("#remaining");
let textarea = document.querySelector("#text");
let maxWords = 150;

textarea.addEventListener("input", () => {
  textvalue = textarea.value;
  remainWords.innerText = ` Remaining charachters:  ${
    maxWords - textvalue.length
  }`;

  if (textvalue.length === 0) remainWords.innerText = "";
});
