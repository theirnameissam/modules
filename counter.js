export function counter (element , cals) {
    this.el = document.querySelectorAll(element)[0]; 
    this.ammount = cals; 
    this.attr = this.el.getAttribute('data-total');
}; 

counter.prototype.update=  () => {
    let newTotal = Number(this.ammount) + Number(this.attr); 
    this.el.textContent = newTotal + 'Calories';  
}; 
