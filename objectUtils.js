/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
const sixth = {name: {firstName: "Patrick", lastName: "Hill"}, age: 47, dob: '9/25/1975', hobbies: ["Playing music", "Movies", "Spending time with family"]} 
const seventh = {age: 47, name: {firstName: "Patrick", lastName: "Hill"}, hobbies: ["Playing music", "Movies", "Spending time with family"], dob: '9/25/1975'}
let areObjectsEqual = (...args) => {
      if(!args){
            throw 'Error: input does not exist'
      }
      for(let i=0;i<args.length;i++){
            if(typeof args[i]!== "object"){
                  throw 'Error: each element in args must be of type object'
            }
            if(typeof args[i]!== "array"){
                  throw 'Error: each element in args must be of type object'
            }
      } 
      for(let i=1;i<args.length;i++){
            let keyObj1=Object.keys(args[0]);
            let keyObj2=Object.keys(args[i]);
            if(keyObj1.length!==keys2.length){
                  return false;
            }
            keyObj2.forEach(ele => {
                  if(!keys1.includes(ele)){
                        return false;
                  }  
            });
            for(let k in keys1){
                  let valObj1=args[0][k];
                  let valObj2=args[i][k];

            }   
            let validobjects;
            function is_valid(Om){
                  return Om != null && typeof Om === 'object'
            }

            if(is_valid(valObj1) && is_valid(valObj2)){
                  validobjects=true;
            }
            if (validobjects && !areObjectsEqual(valObj1, valObj2) || !validobjects && valObj1 !== valObj2) {
                  return false;
                }

      }
      return true;

      

      //this function takes in a variable number of objects that's what the ...args signifies

};

let calculateObject = (object, funcs) => {
      if(!object){
            throw 'Error: Object needs to exist'
      }
      // if(Array.isArray(object)){
      //       throw "error array"
      // }
      if(typeof object !== 'object'){
            throw 'Error: Not an object'
      }
      if(!funcs){
            throw 'Error: Function needs to exist'
      }
      if(!Array.isArray(funcs)){
            throw 'Error: Functions must be an array'
      }
      if(funcs.length < 1){
            throw 'Error:funcs must contain at least one function'
      }
      for(let i in object){
            if (typeof object[i] !== 'number') {
            throw 'Error: Values of the object must be numbers'        
            }
      }
      funcs.forEach(f => {
            if(typeof f !== 'function'){
            throw 'Error: Every function must be type function'
            } 
      });
      funcs.forEach(f=>{
          for(let x in object){
              object[x]=f(object[x]).toFixed(2);
          }
      })
      return object;
  };

let combineObjects = (...args) => {
      if(args.length<2){
            throw 'Error: must have at least two objects'
      }
      for(let i in args){
            if(typeof args[i]!== "object"){
                  throw 'Error: each element in args must be of type object'
            }
            if(args[i].length<1){
                  throw 'Error: each object must have at least 1 key'
            }
      } 

      let obj1=args[0]
      let objm={}
      args.forEach(i=>{
          objm={
              ...obj1,...i
          };
      })
      let obj2={}
      let arr1=[]
      args.forEach(x=>{
          for(let y in x){
              if(!(y in obj2)){
                  obj2[y]=x[y];
              }else {arr1.push(y)}
          }
      })
      let newobj={}
      for(let i in arr1){
          newobj[arr1[i]]=obj2[arr1[i]];
      }
      if(Object.keys(newobj).length==0){
            throw 'no keys that appear in at least any two objects'
      }
      return newobj
  };

  export{combineObjects, calculateObject, areObjectsEqual}