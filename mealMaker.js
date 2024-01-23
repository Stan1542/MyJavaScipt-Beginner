//A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

//create an object named menu 
const menu ={
  _meal: '',
  set meal (mealToCheck){ //we create a setter method that will make sure  that meal is set to a string
   if (typeof mealToCheck === 'string' ){
     this._meal = mealToCheck;
   }
  },
  _price: 0,
  set price (priceToCheck){ //we create a setter method that will make sure  that price is set to a number
   if (typeof priceToCheck === 'number'){
     this._price = priceToCheck;
   }
  },
 // creating a get method that will return the values of meal and price if those values are there.
 get todaysSpecial(){
   if (this._meal && this._price){
     return `Today's Special is ${this._meal} for R${this._price}`; 
   }else{
     return `Meal or price was not set correctly!!`;
   }
 }
 };
 
 
 // Example usage
 menu._meal = 'Bugger and Chips ';
 menu._price = 299;
 
 // Log the result of todaysSpecial
 console.log(menu.todaysSpecial)