// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//event listeners for about and home page
class Tab {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab
    
    // Get the associated page element
    this.itemElement = document.querySelector(`.pitem[data-tab="${this.element.dataset.tab}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.page = new Page(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the tab elements
    const links = document.querySelectorAll('.titem');
  console.log(links)
    //create the deciding if statement
    if (this.element.classList.contains('active-tab')) {
      //remove inactive from all
      links.forEach(function(tab){
        tab.classList.remove('inactive-tab')
      });
      //remove active from current item
      this.element.classList.remove('active-tab');

      // Call the select method on the item associated with this link
      this.page.select();
    }
    else {
      // Remove the active class from all of the links
      links.forEach(function(tab){
        tab.classList.remove('active-tab')
      });

      //add inactive to all
      links.forEach(function(tab){
        tab.classList.add('inactive-tab')
      });

      // Add a class active to this link
      this.element.classList.add('active-tab');
      
      //remove inactive
      this.element.classList.remove('inactive-tab');

      // Call the select method on the item associated with this link
      this.page.select();
    }    
  }
}

class Page {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all page elements from the DOM
    const items = document.querySelectorAll('.pitem');

    if (this.element.classList.contains('active-page')) {
      //remove active from all
      items.forEach(function(card){
        card.classList.remove('active-page')
      });
    }

    else {
      // Remove the class active from each element
      items.forEach(function(card){
        card.classList.remove('active-page')
      });
      
      // Add a class active to this element
      this.element.classList.add('active-page');
    }
  }
}

let links = document.querySelectorAll('.titem')
links.forEach(function(section) {
  return new Tab(section);
});


let slides = document.querySelectorAll('.citem');
let currentSlide = 0;
let timing = setInterval(nextSlide,2000);

function nextSlide() {
  slides[currentSlide].className = 'citem';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'active-img';
}