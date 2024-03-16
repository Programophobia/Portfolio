'use strict';

function titleClickHandler(event){
  event.preventDefault
  const clickedItem = this;
  const portfolioLinks = document.querySelectorAll('.list a.active');

  for(let portfolioLink of portfolioLinks){
      portfolioLink.classList.remove('active')
  }
  clickedItem.classList.add('active')

  const activeGalleries = document.querySelectorAll('.row-1.active');

  for(let activeGallery of activeGalleries){
      activeGallery.classList.remove('active')
  }

  const linkAttribute = clickedItem.getAttribute('href');
  const matchedGallery = document.querySelector(linkAttribute);

  matchedGallery.classList.add('active')
}

const links = document.querySelectorAll('.nav-list a');
const btns = document.querySelectorAll('.btn-links a')

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

for(let btn of btns){
    btn.addEventListener('click', titleClickHandler);
  }

function printAnna(msg) {
  const anna = document.createElement('p');
  anna.innerHTML = msg;
  document.getElementById('anka').appendChild(anna);
}

printAnna('Anna Powąska');































