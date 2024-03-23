/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/


let palindromes = (string) => {
      if (!string) {
            throw 'Error: array does not exists'
      }
      if (!Array.isArray(string)) {
            throw 'Error: not an array'
      }
      if (string.length === 0) {
            throw 'Error: array is empty'
      }
      string.forEach(s => {
            if (typeof s !== 'string') {
                throw 'Error: array element is not a string'
            }
            if (s.trim().length === 0) {
                throw 'Error: string is empty'
            }
            if(!(/[a-zA-Z0-9 ]/g).test(s)){
                throw 'Error: String should be alphanumeric only'
            }
            if(!s){
                throw 'Error: string elemnet does not exist'
            }
      });
      let arr=[];
      let obj={};
      let i=0
      let newarr=[];
      let checkpalindrome=(string)=>{
            arr=string.split("")
            
            newarr=arr.reverse()
            let revstr=newarr.join("")
            if(revstr==string){
                  return true;
            }else{
                  return false;
            }
      }
      string.forEach(str=>{
            str=str.toLowerCase();
            let regex = /[^a-zA-Z0-9]/g;
            str=str.replace(regex,"");
            obj[str]=checkpalindrome(str);
            }
    );
    return obj;
};

let censorWords = (string, badWordsList) => {
      if(typeof string=='string'){
            string = string.trim();
      }
      if (!badWordsList) {
            throw 'Error: Bad words list does not exist'
      }
      if (!Array.isArray(badWordsList)) {
            throw 'Error: Bad words list is not an array'
      }
      if(badWordsList.length==0){
            throw 'Error: Bad words list is empty'
      }
      badWordsList.forEach(word => {
            if(typeof word=='string'){
                  word = word.trim();
      }
      });

      if (!string) {
            throw 'Error: input string does not exist'
      }
      if (string.trim().length === 0) {
            throw 'Error: input string cannot be empty'
      }
      
      badWordsList.forEach(word => {
            if(typeof word !== 'string'){
                  throw 'Error: each element in the bad words list must be a string'
            }
            if(!string.includes(word)){
                  throw 'Error: Bad word does not exist in the input string'
            }
      });

      let censorarr = ['!', '@', '$', '#'];
      let star ='*************************************************************************************************';
      for(let i=0;i<badWordsList.length;i++){
            string = string.replaceAll(badWordsList[i],star.substring(0,badWordsList[i].length));
      }
      let count = string.match(/\*/g);
      count.forEach(element => {
            for(let i=0;i<censorarr.length;i++){
                  string = string.replace('*',censorarr[i]);
            }
      });

return string;
};



let distance = (string, word1, word2) => {
      if(typeof string=='string'){
            string = string.toLowerCase().trim();}
      if(typeof word1=='string'){
            word1 = word1.toLowerCase().trim();}
      if(typeof word2=='string'){
            word2 = word2.toLowerCase().trim();}  
                       
            
      if (!string) {
            throw 'Error: String does not exists'
      }
      if (typeof string !== 'string') {
            throw 'Error: input String is not a string'
      }
      if (string.trim().length === 0) {
            throw 'Error: input string is an empty string '
      }
      if(!((/[a-zA-Z0-9 ]/g).test(string))){
            throw 'Error: String should be alphanumeric only'
      }
      if (!word1) {
            throw 'Error: word1 does not exists'
      }
      if (typeof word1 !== 'string') {
            throw 'Error:word1 is not a string'
      }
      if (word1.trim().length === 0) {
            throw 'Error:word1 is an empty string'
      }
      if(!((/[a-zA-Z0-9 ]/g).test(word1))){
            throw 'Error: word1 should be alphanumeric only'
      }
      if (!word2) {
            throw 'Error: word2 does not exists'
      }
      if (typeof word2 !== 'string') {
            throw 'Error: word2 is not a string'
      }
      if (word2.trim().length === 0) {
            throw 'Error:word2 is an empty string'
      }
      if(!((/[a-zA-Z0-9 ]/g).test(word2))){
            throw 'Error: word2 should be alphanumeric only'
      }
      let S = string.split(" ")
      if (S.length < 2) {
            throw 'Error: Input string must have at least two words'
      }
      if(word1.toLowerCase() == word2.toLowerCase()){
            throw 'Error: word1 and word2 are same'
      }
      if (!string.includes(word1) || !string.includes(word2)) {
            throw 'Error: Input must include word1 and word2'
        }
      let w1, w2;
      for(let i = 0; i < S.length ; i++){
            if(S[i].match(word1))
            {
                  w1 = i;
            }
            if (S[i].match(word2)) {
                  w2 = i;
            }
      }
      if(w1 > w2){
            throw 'Error: Word1 must appear before word2 '
      }
      let first=[],second=[];
      

      let arr=string.trim().split(" ");
      let array1=word1.trim().split(" ")
      let array2=word2.trim().split(" ")
      let idx1=array1.length-1;
      
      let a=0,b=0;
      for(let i=0;i<arr.length;i++){
            if(arr[i]==array1[idx1]){
                  a=i;
            }
            if(arr[i]==array2[0]){
                  b=i;
            }
      }
      
      return(b-a)
         

};


export{distance, censorWords, palindromes}