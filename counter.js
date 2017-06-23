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
