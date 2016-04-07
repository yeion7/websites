const currentLink = document.querySelector('.current-link');
const currentWebsite = document.querySelector('.websites-link');

currentLink.innerHTML = currentWebsite.text;
currentLink.href = currentWebsite.href
