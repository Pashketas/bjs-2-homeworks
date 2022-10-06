"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2*a);
    arr[1] = (-b - Math.sqrt(d)) / (2*a);
  } else if (d === 0) {
    arr[0] = -b / (2*a);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let loanSum;
  let monthPayment;
  let yearPart = percent / 12 / 100;
  let today = new Date();
  let endTerm = new Date(date);
  let term = Math.floor((endTerm -today) / 1000 / 60 / 60 / 24 / 30);
  
    if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 
  
  loanSum = amount - contribution;
  monthPayment = loanSum * (yearPart + (yearPart / ((( 1 + yearPart) ** term) - 1)));
  totalAmount = Number(((monthPayment * term) .toFixed(2)));
  
  return totalAmount;
}
