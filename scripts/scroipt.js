'use strict'; 

let money,
 income='freelance',
 addExpence=prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет'),
 deposit=confirm('Есть ли у вас депозит в банке?'),
 mission= 1000000;
 
let start =function(){
   do{ 
   money=prompt('Ваш месячный доход?');}
    
   while (isNaN(parseFloat(money)));
};
start();

let showTypeOf =function(data){
    return console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expense=[];
let getExpensesMonth= function() {

    let sum=0;
    for (let i=0;i<2;i++){
        expense[i]= prompt('Введите обязательную статью расходов:'); 
        sum += +prompt('Во сколько это обойдется?');
    }
    return sum;
};
let expenseAmount=getExpensesMonth();
let getAccumulatedMonth = function () {
    return  money-expenseAmount;
};

let accumulatedMonth= getAccumulatedMonth();

let getTargetMonth =function() {
    let a=Math.ceil(mission/accumulatedMonth);
    if (a>0) {
      return  console.log("Цель будет достигнута за ",a, " месяцев(-а)");
    } else  {return console.log('Цель не будет достигнута');}
};

let budgetDay=Math.floor(accumulatedMonth/30);

console.log('Расходы за месяц:', expenseAmount);
console.log("Цель заработать ", mission, " тугриков");
getTargetMonth();
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