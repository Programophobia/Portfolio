'use strict';

function titleClickHandler(event){
  event.preventDefault
  const clickedItem = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
const portfolioLinks = document.querySelectorAll('.nav-list a');

for(let portfolioLink of portfolioLinks){
    portfolioLink.classList.remove('active')
}
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}