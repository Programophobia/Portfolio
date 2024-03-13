'use strict';

function titleClickHandler(event){
  event.preventDefault
  const clickedItem = this;

  /* remove class 'active' from all article links  */
const portfolioLinks = document.querySelectorAll('.list a.active');

for(let portfolioLink of portfolioLinks){
    portfolioLink.classList.remove('active')
}
  /* add class 'active' to the clicked link */
  clickedItem.classList.add('active')
  /* remove class 'active' from all articles */
const activeGalleries = document.querySelectorAll('.row-1.active');

for(let activeGallery of activeGalleries){
    activeGallery.classList.remove('active')
}
  /* get 'href' attribute from the clicked link */
  const linkAttribute = clickedItem.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const matchedGallery = document.querySelector(linkAttribute);
  /* add class 'active' to the correct article */
matchedGallery.classList.add('active')
}

const links = document.querySelectorAll('.nav-list a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const btns = document.querySelectorAll('.btn-links a')

for(let btn of btns){
    btn.addEventListener('click', titleClickHandler);
  }