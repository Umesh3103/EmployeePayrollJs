class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this._name; }
    set name(name) { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";    
         
    }

    get id() { return this._id;}
    set id(id) {
        let idRegex = RegExp('^[1-9]+[0-9]*$');
        if(idRegex.test(id))
            this._id = id;
        else throw "id is incorrect";    

    }

    get salary() { return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]+[0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw "salary is incorrect";
    }

    get gender() { return this._gender;}
    set gender(gender) {
        let genderRegex = RegExp('^[M F]$');
        if(genderRegex.test(gender))
            this._gender=gender;
        else throw "Gender is incorrect";    

    }

    get startDate() { return this._startDate;}
    set startDate(startDate) {
        if(startDate === undefined){
            this._startDate = undefined;
        }
        else{
            let date = startDate.split("/");
            let currentDate = new Date().getDate();
            let currentMonth = new Date().getMonth();
            let currentYear = new Date().getFullYear();
            if(date[2] <= currentYear && date[0] <= currentMonth+1 && date[1] <= currentDate)
                this._startDate = startDate;
            else throw "Date is incorrect";  
        } 
    }
    

    toString() {
        const empDate = this.startDate === undefined ? undefined :
                        this.startDate;
        return "id=" +this.id+", name="+this.name+", salary="+this.salary+", gender="+this.gender+", startDate="+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000,"M");
console.log(employeePayrollData.toString());
try {
    employeePayrollData.id = 0;
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", "11/20/2020");
console.log(newEmployeePayrollData.toString());
