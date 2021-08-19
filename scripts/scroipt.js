'use strict'; 
let money;
let start =function(){
   do{ 
   money=prompt('Ваш месячный доход?');}
    
   while (isNaN(parseFloat(money)));
};
start();

let appData= {
    income: {},
    addIncome: [],
    expences: {},
    addExpences: [],
    deposit: false,
    mission:50000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth:0,
    expencesMonth:0,
    asking: function() {
        let addExpences=prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет');
            appData.addExpences= addExpences.toLowerCase().split(',');
            appData.deposit=confirm('Есть ли у вас депозит в банке?');
        for (let i=0;i<2;i++){
            let a=prompt('Введите обязательную статью расходов:');
            do{ 
            appData.expences[a]=+prompt('Во сколько это обойдется?');}
    
            while (isNaN(parseFloat(appData.expences[a])));
        }
    },
    getExpensesMonth: function() {
    let sum=0;
    for (const key in appData.expences) {
        sum += appData.expences[key];
    }
    return sum;
    },   
    getTargetMonth: function() {
    let a=Math.ceil(appData.mission/appData.budgetMonth);
    if (a>0) {
      return  console.log("Цель будет достигнута за ",a, " месяцев(-а)");
    } else  {return console.log('Цель не будет достигнута');}
    },
    getBudget: function () {
    return  money-appData.expencesMonth;
    },
    getStatusIncome :function(){
        if (appData.budgetDay>=1200) {
         console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay>=600) {
            console.log('У вас средний уровень дохода');
                }    else if (appData.budgetDay>=0) {
                            console.log('К сожалению, у вас уровень дохода хреновый');
                    } else { console.log('К вам скоро придут коллекторы');}
    },
};

appData.asking();
appData.expensesMonth = appData.getExpensesMonth(); 

appData.budgetMonth= appData.getBudget();

appData.budgetDay=Math.floor(appData.budgetMonth/30);

console.log('Расходы за месяц:', appData.expensesMonth);

appData.getTargetMonth();

appData.getStatusIncome();
console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
    console.log(key +':'+ appData[key]);
}