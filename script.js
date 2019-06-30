let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.getElementById('main-title').innerHTML = "Fast & Furious";
  }

  shortenPageTitle();


  // Part 2
  function changeBodyBgColor() {
    document.querySelector('body').style.backgroundColor = "Salmon";
  }
  changeBodyBgColor();


  // Part 3
  function removeLastFavoriteThing() {
    let quest = document.getElementById('favorite-things');
    quest.removeChild(quest.lastElementChild);
  }
  removeLastFavoriteThing();


  // Part 4
  function makeSpecialTitlesBigger() {
    let changeSize = document.querySelectorAll(".special-title");
    for(let i = 0; i < changeSize.length; i++){
      changeSize[i].style.fontSize = "2rem";
    }
  }
  makeSpecialTitlesBigger();


  // Part 5
  function RemoveChicagoRace() {
    let adventure = document.getElementById('past-races');
    console.log(adventure.childNodes);
    adventure.removeChild(adventure.childNodes[7]); //Do the actual tags count as children??
  }
  RemoveChicagoRace();

  // Part 6
  function addPastRace() {
   let addMe = document.getElementById('past-races');
   let newTown = document.createElement('li');
   addMe.append('New York');
  }
  addPastRace();


  // Part 7
  function createNewBlogPost() {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p')
    let blogPosts = document.getElementsByClassName('blog-post');
    let blogPost = blogPosts[blogPosts.length - 1];
    h2.innerHTML = 'New York';
    p.innerHTML = 'I went to a sick cat show and saw a cat named the rock';
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('blog-post');
    div.classList.add('purple');
    blogPost.appendChild(div);
    blogPost.parentElement.appendChild(div);

  }
createNewBlogPost();
});
