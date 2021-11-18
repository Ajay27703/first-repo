// Iterative Flow
// * For loop
// * While loop
// * Do while loop
// * For (of)
// * FOR (in)

// * Initilization i = 0;
// * condition     i<=5;
// * Increament/Decreament i = i+1;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// * FOR LOOP

// Ex:
var arr = [1,2,3,4,5,6,7];
console.log(arr);

// Ex: write a program to print 1 to 7 numbers
for(var i=0; i<=7; i=i+1){
    console.log(i);
}

// Ex: write a program to print 1 to 7 numbers
for(var i=0; i<7; i=i+1){
    console.log(i);
}

// Ex: write a program to print "Hellow" 5 times
for (let i=0; i<5; i=i+1){
    console.log("Hello",i)
}

// Ex: write a program to print 10 to 0 numbers
for (let i=100; i>=0; i=i+1){
    console.log(i)
}

// Ex: write a program to print 100,90,80,70,60,50,40,30,20,10,0
for (let i=100; i<0; i=i-10){
    console.log(i)
}

// wap to print 1 to 10 odd numbers
for (let i=1;i<=10;i=i+2){
    console.log('odd numbers',i)
}



