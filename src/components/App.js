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

card.appendChild(front);
card.appendChild(back);
grid.appendChild(card);


  return card;
}
const duplicateData = [...data.items, ...data.items];
const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};


export default App;