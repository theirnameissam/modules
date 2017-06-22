import {counter} from 'counter.js'; 
const form = document.getElementById('add'); 
const cals = document.getElementById('cals'); 
const type = document.getElementById('type'); 
const table = document.getElementById('items'); 
console.log*(counter);
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
    let counterObject = new counter(); 
        counterObject.update();
}