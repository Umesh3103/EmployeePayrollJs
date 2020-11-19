
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }
    
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;        
        }
    }

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }    
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);

    let totEmpWage = 0;
    function sum(dailyWage) {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("Emp wage by for each method: "+totEmpWage);

    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

    let dailyCntr = 0;
    function mapDayWithWage(dailyWage) {
        dailyCntr++;
        return dailyCntr+" "+dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log(mapDayWithWageArr);

    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
    console.log("Daily wage filter with full time wage earned");
    console.log(fullDayWageArr);

    function findFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("First time fulltime wage was earned on "+mapDayWithWageArr.find(findFulltimeWage));

    function isAllFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("check all element have full time wage: "+fullDayWageArr.every(isAllFulltimeWage));

    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("Check if any parttime wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

    function totalDaysWorked(numOfDays, dailyWage) {
        if(dailyWage > 0) return numOfDays+1;
        return numOfDays;
    }
    console.log("Num of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));
}

