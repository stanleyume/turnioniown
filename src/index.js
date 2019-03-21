import style from './style.scss';

let fuggs = document.getElementsByClassName('fugged');

for(var i = 0; i < fuggs.length; i++) {
  fuggs.item(i).setAttribute('data-text', fuggs.item(i).innerText);
}
