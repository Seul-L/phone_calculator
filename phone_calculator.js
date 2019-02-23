/**
Exercise from "You Don't Know JS"

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones(hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

* After you 've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

* Finally, check the amount against your bank account balance to see if you can afford it or not.

* You should set up some constants for the "tax rate", "phone price", "accessory price," and "spending threshold", as well as a variable for your "bank account balance."

* You should define functions for calculating the tax and
for formatting the price with a "$" and rounding to two decimal places.

* Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
**/

// Set phone price
const phone_price = 500;

// Set accessory price
const accessory_price = 50;

// Set tax rate
const tax_rate = 0.13;

// Set spending threshold
const spending_threshold = 100;

// Set bank account balance
var account_balance = 2000;

// Set total purchase cost
var total_cost = 0;

// Set total tax cost
var total_tax = 0;

// Function for calculating the tax
function tax_calc(price, tax_rate) {
  return price * tax_rate;
}

// Function for formatting the price with a "$" and rounding to two decimal places
function formatting(cost) {
  return '$' + cost.toFixed(2);
}

// Purchase phone and accessory until you run out of balance and within the spending threshold
while (account_balance > spending_threshold) {
  total_tax = tax_calc(phone_price + accessory_price, tax_rate);
  total_cost = phone_price + accessory_price + total_tax;

  if (total_cost > spending_threshold) break;

    account_balance = account_balance - total_cost;
    console.log(formatting(total_cost), formatting(account_balance));
}

