'use strict';
/*
// view the entire HTML document
console.log(document);

// find an <h1> element
const heading = document.querySelector('h1');
console.log(heading);

// find an element with the class "value"
const elem01 = document.querySelector('.value');
console.log(elem01);

// find a <button>
const elem02 = document.querySelector('button');
console.log(elem02);

// find an element with class "area"
const elem03 = document.querySelector('.area-display');
console.log(elem03);

// find an <div> that  is a descendant of class "stat"
const elem04 = document.querySelector('.stat div');
console.log(elem04);

// find an element with class "hello"
const elem05 = document.querySelector('.hello');
console.log(elem05); // null because it does not exist

// find all buttons
const buttons = document.querySelectorAll('button');
console.log(buttons);

// iterate over the NodeList of buttons
for (let element of buttons.values()) {
  console.log(element);
}

// find all h3
const heading3List = document.querySelectorAll('h3');

// iterate over entire list
for (let element of heading3List.values()) {
  console.log(element);
}

// another way to iterate
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

// find all divs containing ratings
const ratings = document.querySelectorAll('.rating-display .value');
for (let rating of ratings) {
  const ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add('high-rating');
    rating.classList.remove('value');
  }
}

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element);
}

// find all divs containing areas
const areas = document.querySelectorAll('.area-display .value');

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}

//find all park descriptions
const descriptions = document.querySelectorAll('.description-display');
//iterate over all descriptions
for (let desc of descriptions.values()) {
  //target text of descriptions with a variable
  let content = desc.innerText;

  //check if the length of the text in the descriptions is greater than 250 characters
  if (content.length > 250) {
    //if greater than 250 characters, truncate and add a clickable link with text of '...'
    content = content.slice(0, 250);
    content += '<a href="#">...</a>';
  }
  //set description text in the DOM to the new truncated version
  desc.innerHTML = content;
}

//find all parks
const parks = document.querySelectorAll('.park-display');
//get number of parks in list
const numberParks = parks.length;
//create new DOM div element
const newElement = document.createElement('div');
//add text to div element
newElement.innerText = `${numberParks} exciting parks to visit`;
//add css class to div element
newElement.classList.add('header-statement');
//target header element
const header = document.querySelector('header');
//add new div element to the header element in the DOM
header.appendChild(newElement);

// Get the parent element of all parks
const main = document.querySelector('main');
// Select a single park
const park = main.querySelector('.park-display');
// Remove that park
//main.removeChild(park);


*/




//--------------------------------------EVENT LISTENERS--------------------------------------

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", function (event) {
//   console.log(event.target.parentNode);
// });

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = '#c8e6c9';
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector('h2').innerText;
  const parkBName = parkB.querySelector('h2').innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector('.rating-display > .value').innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector('.rating-display > .value').innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector('main');

  // 2. get the list of parks
  const parksList = main.querySelectorAll('.park-display');

  // 3. empty the main
  main.innerHTML = '';

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector('main');

  // 2. get the list of parks
  const parksList = main.querySelectorAll('.park-display');

  // 3. empty the main
  main.innerHTML = '';

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector('#name-sorter');

  // add an event listener
  nameSorter.addEventListener('click', nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector('#rating-sorter');

  // add an event listener
  ratingSorter.addEventListener('click', ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll('.rate-button');

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener('click', favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', main);