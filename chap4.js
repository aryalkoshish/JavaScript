var stack = new Array(5);
var tos = -1;


var push = function(x){
  if(tos===5){
    console.log('stack full');
  }
  else {
    stack[tos]=x;
    console.log(x+'is added to stack');
    tos++;
  }
}
var pop =function(){
  if(tos=== -1){
    console.log('stack empty');
  }
  else {
    tos--;
    console.log( stack[tos] +'is popped');


  }
}
push(5);
pop();
push(10);

console.log(stack);
