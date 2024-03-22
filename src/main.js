import App from './components/App.js';
import data from "../data/artistasdados/artistas.js";

data.items.forEach((item) => document.getElementById('root').appendChild(App(item)));

