import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//event listeners for about and home page
class Tab {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab
    
    // Get the associated page element
    this.itemElement = document.querySelector(`.page[data-tab='${this.element.dataset.tab}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.page = new Page(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.card');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(function(tab){
      tab.classList.remove('active-card')
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('active-card');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class Page {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.pitem');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(card){
      card.classList.remove('active-page')
    });
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('active-page');
  }
}

let links = document.querySelectorAll('.card').forEach(function(section) {
  return new Tab(section);
});