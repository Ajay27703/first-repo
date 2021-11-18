//let emp = {}; //empty object
let emp = { name: "Narasimha", sal: 45000, loc: "BNG" };
console.log(emp);

//how to read object properties
console.log(emp.name);
console.log(emp.sal);
console.log(emp.loc);
console.log(emp.is_Avail);
//If you are try to access a object property 
//which is not exists we will get undefined

// Ex:
let emp = {
    name: "Ravi",
    sal: 45000,
    loc: ["BNG", "SNG", "USA"],
    getDetails: function () {
      console.log("Hello,GM");
    },
  };
  console.log(emp.loc);
  console.log(emp.sal);
  console.log(emp.getDetails());


//   Ex:
  let contact = { houseNo: 96, area: "Marathahalli" };
  console.log(contact.houseNo);
  console.log(contact.area);
  console.log(contact.state);
  /*
  If you are trying access a object property 
  which is not exists in object we will get - undefined
  If you are trying access a object method
  which is not exists in object we will get - Error
  */

//   Ex:
let emp = {
    sal: 45000,
    getOrder: function () {
      console.log("Inside getOrder function");
      return false;
    },
  };
  
  console.log(emp.sal);
  console.log(emp.getOrder());
  console.log(emp.name);
  console.log(emp.getName());

//   Ex:
let emp = { name: "Ravi" };
emp.sal = 45000;
emp.name = "Ravi Kumar";
console.log(emp);

// Ex:
let user = {
    name: "Ravi",
    email1: "Ravi@gmailc.om",
    email2: "Ravi@tcs.com",
    sal: 45000,
  };
  console.log(user);
  delete user.email1;
  console.log(user);





