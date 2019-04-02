//confirming if the string is pangram or not.
let givenString ='hello';
var b=givenString.length;
/*var a=0;
var s=0;
 for(var i=0;i<=b;i++){
   var n =givenString.charCodeAt(i);
   //console.log( n+'is a code of '+ string[i]);
   for(var j=97;j<=122;j++){
     if(n===j){
     console.log(n +'is equal to' +j)
     for(var k=0;k<b;k++)
     {
       console.log(givenString[k]+'is undefined');
       givenString.pop;

     }
     a++;
   }
 }
}
console.log('matched numbers'+a );
/*
       a++;
       for(var k =0;k<b;k++){
        string[k]='undefined';
        console.log(string[k]+'the value');
      }
    }
   }
console.log(a+'the total value ');
 }
/*if(a===26){
  console.log('it is plaingram');
}
else {
  console.log('it is not palingram');
}*/

var str =0;

for (var i = 0; i < givenString.length; i++) {
  if ('a'<= givenString[i] && givenString[i]<='z') {
    str = givenString[i]-'a';
  }
  givenString[str]===true;
}
for (var i = 0; i < 25; i++) {
  if(givenString[str]===false){
    console.log('string is pangram');
  }
  else {
      console.log('string is not pangram')
    }
  }
