
// console.log("JavaScript is linked properly.");


//==============Working on MAP, Reduce, Filter==================//

//EX 1 const numbers=[1,2,3,4];
// const dub= numbers.map(num => num*2)
// alert(dub);

// EX2

// const numbers =[4,6,8,9];
// const min = numbers.map(mins => mins -3);
// alert(min);

                // filter

// Ex1

// const number=[1,2,3,4,5,6,7,8,9,10];
// const even=number.filter( num => num % 2 ===0 );
// alert(even)
// Ex2
// const numbers=[11,22,33,44,45,451,1356,3425];
// const odd=numbers.filter( num=> num % 2 !==0);
// alert(odd);

                ///Reduce

// Ex1
// const numbers=[1,2,3,4,5];
// const sum = numbers.reduce((acc,num) => acc + num,0);
// alert(sum);
// work more of reduce
///////   Destructuring   ////////

// Ex1

// const numbers=[10,20,30];
// const [x,y]=numbers;
// alert(y);

// Ex2
//  const user={name:"Farzam", age:23, role:"developer"};
//  const {role:job}=user;
//  alert(job);
//  alert("All code is working properly");
// 
// 
// ////////// Spread Operator (...) ////////

// Ex1
        // const user={ name:"Farzam", age:23};
        // const userClone={ ...user, role:"Software Engineer", country:"DeutchLand"};
        // console.log(userClone);
///////// rest operator ////////

// Ex1
// const [first, ...others]=[12,23,34,32,55];
// alert(first);
// alert(others);

// ex2
// const {name, ...details}={ name:"Farzam" , age:23, role:"Best Developer there is"};
// alert(name);
// console.log(details);
