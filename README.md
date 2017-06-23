# A Quick Introduction Into ES6 Modules

ES6 Modules have thoeretically been around for a while, but the worlds number one browser Chrome has only recently added support for ES6 Modules. Even now the support is very small, as it is only 
supported in the Carnary build of the browser behind a flag. Even so going through the effort of setting all this up is worth it to use one of ES6 most anticipated feature. 

### Setting Up 
First of you need to download [Chrome Canary](https://www.google.nl/chrome/browser/canary.html) and then enable the experimental web platform features flag. As of writing Canary is not avalible on Linux so you'll need to wait or get to a Window or Mac machine. I've also made a quick example for us to use and placed it on [Github](https://github.com/klombomb/modules). I wanted to do something else than the ever prevailing to-do list so I decided to code together a quick calorie counter. 

### The Benefits Of Using Modules
The primary reason to use modules is to organize your code. Most people already use modules of some sort in Javascript, wether this is via Browserify, Webpack or one of the many other alternatives. If you've used one of those then you know how using Modules can help you write better structured and cleaner code. The problem with the Browserify's and Webpack's of this world is that they are a hassle to install. ES6 Modules don't require anything extra to use. 

When support is eventually widespread we will hopefully see a lot people writing better code. More than anything at this point in the evolution of JavaScript ES6 Modules remove the learning gap that came with modularized code in the past.  

### Getting Started 
After you've cloned the code from Github you'll need to spin up a basic web server of some sort to run the code as modules aren't supported from the file protocol. 

#### Quirks 
As of writing 'bare' module specifiers aren't supported at all. A bare specifier is one that is just a filename without any slashes or dots infront or after it. See an example below: 

How it should work:
```javascript 
import { counter } from 'counter.js'; // even without the .js extension
``` 
Workaround:
```javascript 
import { counter } from './counter.js'; 
``` 

This is a minor issue but if you're getting errors this is one to check for. It is important to understand that only the top level module needs to be added to the HTML document, the rest is done using JavaScript. 
```html
                      < module 1 
                     /
index.html <- main.js 
                     \
                      < module 2 
``` 
There isn't neccarily a heirarchy to using modules, however it is a good practice to create one anyway. It is very possible to create spaghetti code with modules as well. Creating sub folders for every level of modules is a good method to prevent this from happening.  

#### The Script Tag 

Adding a module to a page requires a slightly different tag then usual. See below: 
```html 
<script type="module" src="main.js"></script>
```
You need to add the module type to your script tag to let the browser know you're adding code that uses modules and not just any old JavaScript file. 
#### Backwards Compatibility 
A nice feature of the modules spec is that they've also thought about what the browser should do when it doesn't support modules. For that they create the ```nomodule``` attribute for the script tag. See below: 
```html 
<script nomodule src="main.precompiled.js"></script>
```
If the browser doesn't support modules it will automatically fallback to this script. However if it does support modules it will ignore this tag. 

#### Making A Module 
In the ```counter.js``` file you will find a module. This is an ES5 constructor that has a method we use to update the total count. 
```javascript
export function counter (element , cals) {
    this.el = document.querySelectorAll(element)[0]; 
    console.log(this.el);
    this.ammount = cals; 
    this.attr = this.el.getAttribute('data-total');
}; 

counter.prototype.update= function () {
    let newTotal = Number(this.ammount) + Number(this.attr); 
    console.log(this.el);
    this.el.children[0].textContent = newTotal + ' Calories';  
    this.el.setAttribute('data-total', newTotal);
}; 
```
By adding the export statement before the constructor decleration we are exposing it as the primary 'export' for this module. In our ```main.js``` file we then import the counter from the ```counter.js``` file. 
```javascript
import { counter } from './counter.js'; 
const form = document.getElementById('add'); 
const cals = document.getElementById('cals'); 
const type = document.getElementById('type'); 
const table = document.getElementById('items'); 
form.onsubmit = function (event) {
    event.preventDefault();    
    let row = document.createElement('tr'); 
    let cellType = document.createElement('td'); 
    let cellCals = document.createElement('td');
    cellType.textContent = type.value; 
    cellCals.textContent = cals.value; 
    row.appendChild(cellType);
    row.appendChild(cellCals); 
    table.appendChild(row); 
    let counterObject = new counter('#counter', cals.value); 
        counterObject.update();
}
```
That's it. It's a lot like we added the code for counter in another script tag before we added this code, except we're calling it at the top of this document instead of piling up the script tags in our HTML file. Want to know more about modules? Checkout [this](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7) post by the Chrome Dev Team. 