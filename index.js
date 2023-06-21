// code your solution here

function saturdayFun(activity = "roller-skate"){
 return `This Saturday, I want to ${activity}!`;
  
}

 
 function mondayWork(defaultActivity = "go to the office"){
  return `This Monday, I will ${defaultActivity}.`;
 }

   
function wrapAdjective(string = "*"){
  
  return function inner(defaultAdjective = "special"){
    return `You are ${string}${defaultAdjective}${string}!`;
  }
}

//wrapAdjective("*")("*a hard worker*!"); //=> "You are %a dedicated programmer%!