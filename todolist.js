const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const addToListInput = document.querySelector('input.addToListInput');
const addToListButton = document.querySelector('button.addToListButton');
const clearListButton = document.querySelector('button.clearListButton');
const lis = listUl.children;

function attachListItemButtons(li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'X';
  li.appendChild(remove);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = '\u2193';
  li.appendChild(down);

  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = '\u2191';
  li.appendChild(up);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON') {
    if(event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

addToListButton.addEventListener('click', () => {
  if (addToListInput.value.trim() === "") { // check if the (trimmed) input textbox is an empty string
    return;  // Return (stop the function) if that is the case
  }
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addToListInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addToListInput.value = '';
});

addToListInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        addToListButton.click();
    }
});

clearListButton.addEventListener('click', () => {
  listUl.innerHTML='';
});
