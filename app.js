/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import * as arraymodule from './arrayUtils.js'
import * as objectmodule from './objectUtils.js'
import * as stringmodule from './stringUtils.js'

// let people = [ 
//     {name: 'Ryan', age: '22', location: 'Hoboken',role:'Student'}, 
//     {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
//     {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'}, 
//     {name: 'Greg', age: '22', location: 'New York', role: 'Student'}, 
//     {name: 'Mike', age: '21', location: 'Chicago', role: 'Teacher'} ]; 
    
   
//    try{
//        console.log(arraymodule.sortAndFilter(people, ['name', 'desc'], ['age', 'desc'], 'role', 'Student'));
//    }
//    catch(e){
//     console.log(e);
//    }
// console.log(arraymodule.sortAndFilter(people, ['name', 'asc'], ['location', 'asc'], 'age', '21'));

// try{
//     console.log(arraymodule.merge([4,0,"henfas",9,43,"Ainz"], ["roar" ,"pyke memes",8,15], [6,"hell","!Patrick",78,7]));}
// catch(e){
//  console.log(e);
// } 
// try{
//     console.log(arraymodule.merge(["gwen", 20, 1, [[[null, "gall"]]]], [9, 4, "bladder", ["fizz the fish", 8]]));}
// catch(e){
//  console.log(e);
// } 


// try{
//     console.log(arraymodule.matrixMultiply([ [3,1], [2,3], [1,3] ], [ [1,1,1], [1,2,3] ], [ [1], [2], [3] ]));
// }
// catch(e){
//  console.log(e);
// } 
// try{
//     console.log(arraymodule.matrixMultiply([ [2,5] ], [ ['lol'], [9] ]));}
// catch(e){
//  console.log(e);
// } 



// try{
//     console.log(stringmodule.palindromes(["Madammadam", "dbwniked", "Was it a cat I saw?","lollipop", "Poor Dan is in a droop", "lol", "Never" ]));
//     console.log(stringmodule.palindromes());
// }
// catch(e){
//  console.log(e);
// } 


//     let badWords = ["bread","chocolate","pop"];
//     try{
//         console.log(stringmodule.censorWords("I like bread that has chocolate chips in it but I do not like lollipops", badWords));}
//     catch(e){
//     console.log(e);
//     } 

//     try{
//         console.log(stringmodule.censorWords("     ", badWords));}
//     catch(e){
//     console.log(e);
//     } 


// // console.log(stringmodule.distance("I was going to buy workout powder yesterday", "going to", "workout powder")); // returns 2
// // console.log(stringmodule.distance("sphinx of black quartz, judge my vow", "QUARTZ", "vOW")); // returns 3
// // // // console.log(stringmodule.distance("I really hope it will snow soon because I like snow", "I", "snow")) // returns 2
// // // console.log(stringmodule.distance("I like sweet and salty but I like sweet more", "salty", "sweet")); // returns 4
// // // }
// // catch(e){
// //     console.log(e)

// // }


// const first = {a: 2, b: 3};
// const second = {a: 2, b: 4};
// const third = {a: 2, b: 3}
// const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
// const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
// const sixth = {name: {firstName: "Patrick", lastName: "Hill"}, age: 47, dob: '9/25/1975', hobbies: ["Playing music", "Movies", "Spending time with family"]} 
// const seventh = {age: 47, name: {firstName: "Patrick", lastName: "Hill"}, hobbies: ["Playing music", "Movies", "Spending time with family"], dob: '9/25/1975'}
// const eighth = {b:3, a:2}

// try{
//     // console.log(objectmodule.areObjectsEqual(first, second, third)); // false
//     // console.log(areObjectsEqual(forth, fifth)); // true
//     console.log(objectmodule.areObjectsEqual(forth, third, sixth)); // false
//     console.log(objectmodule.areObjectsEqual(sixth, seventh)); // true
//     // console.log(areObjectsEqual(first, eighth, third)); // true
//     // console.log(areObjectsEqual({}, {}, {}, {}, {})); // true
//     // console.log(objectmodule.areObjectsEqual([1,2,3], [1,2,3])); // throws error 
//     // console.log(objectmodule.areObjectsEqual("foo", "bar")); // throws error);
// }
// catch(e){
// console.log(e);
// } 


console.log(objectmodule.calculateObject({ a: 3, b: 7, c: 5 }, [(n => n * 2), (n => Math.sqrt(n))]))//     console.log(objectmodule.calculateObject({ a: 'Hello', b: 7, c: false }, [(n => n * n)]));}
// catch(e){
// console.log(e);
// }
// try{
//     console.log(objectmodule.calculateObject({ a: 1, b: 2, c: 3}, [false]));}
// catch(e){
// console.log(e);
// }


// try{
//     console.log(objectmodule.combineObjects({ a: 3, b: 7, c: 5 }, { d: 4, e: 9 }, { a: 8, d: 2 }));}
// catch(e){
//     console.log(e);
//     }
// try{
//     console.log(objectmodule.combineObjects({ apple: 'orange', orange: 'pear' }, { pear: 'blueberry', fruit: 4 }, { cool: false, intelligence: -2 }));}
// catch(e){
//     console.log(e);
//     }    