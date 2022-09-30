const list = document.querySelector("ul");
const input = document.querySelector("input")
const button = document.querySelector("button");



button.addEventListener("click", () => {
   const item = input.value;
   input.value = '';
   //<li></li>
   //<span></span>
   //<button></button>

   const li = document.createElement("li");
   const span = document.createElement("span");
   const button = document.createElement("button");
   li.appendChild(span);
   span.innerHTML = item;
   li.appendChild(button);
   button.innerHTML = 'Delete';
   list.appendChild(li);

   button.addEventListener('clcik', () => {
      list.removeChild(li);
   });
   input.focus();

});