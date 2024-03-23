/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let sortAndFilter = (array, sortBy1, sortBy2, filterBy, filterByTerm) => {
  if(typeof filterBy!== 'string'){
    throw 'filterBy is not string'
  }
  if(typeof filterByTerm!== 'string'){
    throw 'filterByTerm is not string'
  }
  filterBy=filterBy.trim()
  filterByTerm=filterByTerm.trim()

  if(!array){
    throw 'array parameter should exist'
  }
  if(!Array.isArray(array)){
    throw 'not an array'
  }
  if (array.length==0) {
    throw 'array is empty'
  }
  if (array.length<2) {
    throw 'array must have atleast 2 elements'
  }
  array.forEach(ele => {
    if(typeof ele!=="object"){
      throw 'element in array is not of type object'
    } 
    if(ele.length==0){
      throw 'empty object'
    }
  });
  function keycompare(x,y) {
    return Object.keys(y).every(key=>x.hasOwnProperty(key))  
  }
  for(let i=1;i<array.length;i++){
      let flag = keycompare(array[0],array[i]);
      if(!flag){
        throw 'objects dont have same keys'
      }
  }
  array.forEach(ele => {
    for(let x in ele) {
      if(typeof ele[x]!='string'|| ele[x].trim().length==0){
        throw 'object value not a string'
      }
  }
  })
  if(!sortBy1){
    throw '2nd array param does not exist'
  }
  if(sortBy1.length==0){
    throw '2nd array param empty'
  }
  if(!sortBy1.length==2){
    throw '2nd array param only two elements'
  }
  for(let x in sortBy1) {
    if(typeof sortBy1[x]!='string'|| sortBy1[x].trim().length==0){
      throw '2nd array parameter is not string'
    }
  }
  array.forEach(element => {
    if(!(sortBy1[0] in element)){
      throw '2nd array parameter index 0 does not exists as a key in the array of objects'
    }
  });
  if(!((/^(asc|desc)$/).test(sortBy1[1].trim()))) {
    throw "2nd array parameter index 1 should be asc or desc "
  }
  if(!sortBy2){
    throw '3rd array param does not exist'
  }
  if(sortBy2.length==0){
    throw '3rd array param empty'
  }
  if(!sortBy2.length==2){
    throw '3rd array param only two elements'
  }
  for(let x in sortBy2) {
    if(typeof sortBy2[x]!='string'|| sortBy2[x].trim().length==0){
      throw '3rd array parameter is not string'
    }
  }
  array.forEach(element => {
    if(!(sortBy2[0] in element)){
      throw '3rd array parameter index 0 does not exists as a key in the array of objects'
    }
  });
  if(!((/^(asc|desc)$/).test(sortBy2[1].trim()))) {
    throw "3rd array parameter index 1 should be asc or desc "
  }
  array.forEach(element => {
    if(!(filterBy in element)){
      throw '4th array parameter does not exists as a key in the array of objects'
    }
  })
  let f= false;
  array.forEach(ele => {
    for(let x in ele) {
      if(ele[x]==filterByTerm){
        f=true;
      }
  }
  })
  if(f==false){
    throw 'object does not have filterByTerm value'
  }
  


  let newObjArray=[];
  
  function filterByKeyValue(filterBy,filterByTerm){
      array.forEach(ele=>{
          if(ele[filterBy]==filterByTerm){
              newObjArray.push(ele);
          }
      })
      return newObjArray;
  }
  
  function comparelocFirst(a, b) {
      const tmp1 = a[sortBy2[0]].toUpperCase();
      const tmp2 = b[sortBy2[0]].toUpperCase();
      let tempflag = 0;
      if (tmp1 < tmp2) {
        tempflag = -1;
      } else if (tmp1 > tmp2) {
        tempflag = 1;
      }
      if(sortBy2[1]=="asc"){
        return tempflag;
        }
      if(sortBy2[1]=="desc"){
        return tempflag*-1;
      }else{
          throw "Error"
      }
  };
  
  function comparelocSecond(a, b) {
      const tmp1 = a[sortBy1[0]].toUpperCase();
      const tmp2 = b[sortBy1[0]].toUpperCase();
  
      let tempflag = 0;
      if (tmp1 < tmp2) {
        tempflag = -1;
      } else if (tmp1 > tmp2) {
        tempflag = 1;
      }
      if(sortBy1[1]=="asc"){
        return tempflag;
        }
      if(sortBy1[1]=="desc"){
        return tempflag*-1;
      }else{
          throw "Error"
      }
  };  
      let firstArray = filterByKeyValue(filterBy,filterByTerm);
      let secondArray = firstArray.sort(comparelocFirst);
      return secondArray.sort(comparelocSecond);
  }
 
   
   

  
  let merge = (...args) => {
    if(args.length<1){
      throw 'At least one array must be supplied as input'
    }
    args.forEach(ele => {
      if(!Array.isArray(ele)){
        throw 'each input is not an array'
      }
      if(ele.length==0){
        throw 'Each array must have at least one element'
      }
    })
    let tarr=[]
    args.forEach(ele => {
      tarr= ele.flat(100);
      for(let i in tarr){
        if(!Array.isArray(tarr[i]) && typeof tarr[i]!=='number' && typeof tarr[i]!=='string'){
          throw 'Each array element must be either a string,  number or an array that has either strings or numbers as elements'
        }
      }

    })

  let narr=[];
  mergeArr(...args)
  function mergeArr(...args){
    args.forEach(arg=>
    arg.forEach(ele=>{
        if(Array.isArray(ele)){
            mergeArr(ele);   
        }else{
            narr.push(ele);
        }
    })
    )}
  let num = [];
  let char = [];
    
  narr.forEach(element => {
    if (typeof element == 'number'){
      num.push(element);
    }
    if (typeof element == 'string'){
      char.push(element)
    }
  });
  char = char.sort()
  num = num.sort((a,b) => a - b)
  char.forEach(e => {
    num.push(e)
    });
  return num;
  };
  
let matrixMultiply = (...args) => {
  if(args.length<2){
    throw 'There should at least two inputs'
  }
  for(let i in args){
    if(!Array.isArray(args[i])){
      throw 'Each input must be an array'
    }
    if(args[i].length==0){
      throw 'array is empty'
    }
  }
  
  for(let i=0;i<args.length;i++){
    for(let j=0;j<args[i].length;j++){
    if(!Array.isArray(args[i][j])){
      throw 'The outer array must have only arrays as elements'
    }
  }
  }
   
  for(let i=0;i<args.length;i++){
    for(let j=0;j<args[i].length;j++){
      for(let k=0;k<args[i][j].length;k++){
        if(typeof args[i][j][k]!== 'number'){
          throw 'The inner arrays must only have numbers as elements'
        }
        if(args[i][0].length!==args[i][j].length){
          throw 'Each inner array must be of the same length'
        }
      }
    }  
  }
  

  
  
  let length = args.length;
  let final = multiply(args[0], args[0].length, args[0][0].length, args[1],  args[1].length, args[1][0].length);
  
  for (let x = 2; x < length; x++) {
      final = multiply(final, final.length, final[0].length, args[x], args[x].length, args[x][0].length);
  }
  return final;
  

  function multiply(mat1, m1, m2, mat2, n1, n2) {
      if (m2 != n1) {
          throw "multiplication not possible";
      }
      let i, j, k;
      let final = new Array(m1);
      for (i = 0; i < m1; i++)
          final[i] = new Array(n2);

      for (i = 0; i<m1; i++) {
          for (j = 0; j<n2; j++) {
              final[i][j] = 0;
              for (k = 0; k<m2; k++) {
                  final[i][j] += mat1[i][k] * mat2[k][j];
              }
          }
      }
      return final;
  }
};


export {sortAndFilter, matrixMultiply, merge}