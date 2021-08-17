'use strict'; 

let money=+prompt('Ваш месячный доход?');
let income='freelance';
let addExpence=prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет');
let deposit=confirm('Есть ли у вас депозит в банке?');

let expense1=prompt('Введите обязательную статью расходов:');
let amount1=+prompt('Во сколько это обойдется?');
let expense2=prompt('Введите обязательную статью расходов:');
let amount2=+prompt('Во сколько это обойдется?');
let mission= 1000000;

let getExpensesMonth= function() {
    return amount1+amount2;
};
 
let getAccumulatedMonth = function () {
    return  money-getExpensesMonth();
};

let accumulatedMonth= getAccumulatedMonth();

let getTargetMonth =function() {
    return Math.ceil(mission/accumulatedMonth);
};


let showTypeOf =function(data){
    return console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let budgetDay=Math.floor(accumulatedMonth/30);

console.log('Расходы за месяц:', getExpensesMonth());

console.log(addExpence.length);
console.log("Период равен ", getTargetMonth(), " месяцев(-а)");
console.log("Цель заработать ", mission, " тугриков");
console.log(addExpence.toLowerCase());
console.log(addExpence.split());
console.log('Бюджет на день: ',budgetDay);

let getStatusIncome = function(){
if (budgetDay>=1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay>=600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay>=0) {
     console.log('К сожалению, у вас уровень дохода хреновый');
} else { console.log('К вам скоро придут коллекторы');}
};

getStatusIncome();