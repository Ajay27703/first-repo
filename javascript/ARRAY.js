// Array: group of values as unity,array values are storing based on indexing

// Ex: how to create array 
let e =[];
console.log(e);
// empty array

// Ex:
let emp = ["ajay ","rj","sanjay","vinay"];
//indexing   0      1       2       3

// how to read array 
console.log(emp);

// how to read array values 
console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
console.log(emp[3]);

// how  to find array length
console.log(emp.length);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ex:
let size = [38,40,42,44,38,"forty",true];
// array allowas duplicate & hetrogeneous 
console.log(size);
console.log(size[0])
// console.log([-1]) negative indexing is not possible 


// Iterate array

// Ex: 
let siz = [38,40,42,44,46,48];
//indexing  0  1  2  3  4  5
// array iterable object 
for (let i=0; i<=siz.length-1; i=i+1){
    console.log(siz[i]);
}

// Ex:
let e_names = ["ajay","kiran","girish"];
// iterate using for loop
for (let i=0; i<=e_names.length-1; i=i+1){
    console.log(e_names[i]);
}

// Ex: 
let E_names = ["girish","kiran","ajay"]
// iterate using while loop
let i=0;
while(i<=E_names.length-1){
    console.log(E_names[i]);
    i=i+1
}


// iterate using for of loop
let sizee = [38,40,44];
for(value of sizee){
    console.log(value)
}


