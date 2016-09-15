const phone = 99.99;
const accessory = 24.95;
const tax = 0.21;
const treshold = 1000;

var bankAccount = 1234.56; 
var totalPrice = 0;

var formatPrice = function(number){
  return number.toFixed(2);
}

var calculateTax = function(value){
  return value*tax;
}

while(bankAccount > totalPrice){
  totalPrice += phone;

  if(treshold > totalPrice){
    totalPrice += accessory;
  }
}

totalPrice += calculateTax(totalPrice);

console.log(formatPrice(totalPrice));

if(totalPrice > bankAccount){
  console.log('need more dough');
}

