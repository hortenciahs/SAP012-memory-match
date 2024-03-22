import data from "../data/artistasdados/artistas.js";
const grid = document.querySelector('.grid');

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const App = (item) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");
  front.innerHTML = ` <img src='${item.image}'>
  ` 

card.className = 'card';
front.className = 'face front';
back.className = 'face back';

card.appendChild(front);
card.appendChild(back);

grid.appendChild(card);


  return card;
};
export default App;