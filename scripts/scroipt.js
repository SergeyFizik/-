let money=+prompt('Ваш месячный доход?');
let income='freelance';
let addExpence=prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет');
let deposit=confirm('Есть ли у вас депозит в банке?');

let expense1=prompt('Введите обязательную статью расходов:');
let amount1=+prompt('Во сколько это обойдется?');
let expense2=prompt('Введите обязательную статью расходов:');
let amount2=+prompt('Во сколько это обойдется?');
let mission= 1000000;
let budgetMonth=money-amount1-amount2;
console.log('Бюджет на месяц:', budgetMonth);
let period=Math.ceil(mission/budgetMonth);
let budgetDay=Math.floor(budgetMonth/30);

console.log("money=",typeof money, "income=",typeof  income, "deposit=",typeof  deposit);
console.log(addExpence.length);
console.log("Период равен ", period, " месяцев(-а)");
console.log("Цель заработать ", mission, " тугриков");
console.log(addExpence.toLowerCase());
console.log(addExpence.split());
console.log('Бюджет на месяц: ',budgetDay);

if (budgetDay>=1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay>=600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay>=0) {
     console.log('К сожалению, у вас уровень дохода хреновый');
} else { console.log('К вам скоро придут коллекторы');}
