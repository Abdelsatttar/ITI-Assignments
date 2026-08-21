//  console.log('-------------------------Question 1 — Salary Increase---------------------');
//  let salaryEmployee=Number(prompt('Enter salary employee'));
//  let IncreaseSalary=salaryEmployee*.05;
//  let afterAddIncreaseSalary = IncreaseSalary + salaryEmployee;
//  console.log(`Salary Employee After Increase ${afterAddIncreaseSalary}`);


//  console.log('-------------------------Question 2 — Even or Odd---------------------');
//  let Num=Number(prompt("Enter your Number "));
//  if(Num %2==0)
//      console.log(`Number is Even `);
//  else
//  {console.log(`Number is Odd`);} 


//  console.log('----------------------Question 3 — Pass, Fail, or Excellent------------------------');
//  let grade = Number(prompt("Enter Grade"));
//  if(grade >= 90){
//      console.log("Excellent");
//  }
//  else if(grade >= 50 && grade <= 89){
//      console.log("Pass")
//  }
//  else {     
//      console.log("Fall")
//  }


//  console.log('----------------------Question 4 — Discount Eligibility------------------------');
//  let checkStudent=prompt("are u student(true or false)");
//  let checkAge=Number(prompt('Enter your age'));
//  if(checkAge <=25 && checkStudent){
//      console.log(`Discount Available`)
//  }
//  else{
//      console.log(`No Discount Available`);
//  }



console.log('----------------------Question 5 — Largest Number------------------------');

let num1=Number(prompt("Enter Number To check large number one"))
let num2=Number(prompt("Enter Number To check large number two"));
let num3=Number(prompt("Enter Number To check large number three"))

if(num1==num2&& num2==num3){
    console.log("All numbers are equal");
}
else if(num1> num2 && num1>num3 ){
     console.log(`${num1}`)
}
else if(num2 > num1 && num2 >num3){
   console.log(`${num2}`)
}
else{
   console.log(`${num3}`);
}


