var displayarea= document.getElementById('display')
function buttonclicked(buttontext){
function isoperator(buttontext){
   if(buttontext=='+' || buttontext=='-' || buttontext=='*' || buttontext=='/' || buttontext=='%')
   return true
   else
   return false
}
// var displayarea= document.getElementById('display')
// function buttonclicked(buttontext){
//    if(displayarea.innerText.length>=24){
//       return
//    }
//    if(buttontext!='CLR' && buttontext!='DEL' && buttontext!='='){
//    if(displayarea.innerText=='0'){
//       if(buttontext!='0' && buttontext!='00'){//dont do anything
//          if(buttontext=='.' || isoperator(buttontext)){//
//             displayarea.innerText= displayarea.innerText + buttontext
//          }
//          else{
//             displayarea.innerText=buttontext
//          }
//       } 
//    }
//    else{
//       if(isoperator(displayarea.innerText[displayarea.innerText.length-1]) && isoperator(buttontext))
//       {
//          //replace operator if last digit is operator
//          displayarea.innerText=displayarea.innerText.slice(0,-1)+ buttontext
//       }
//       else{
//          // if(buttontext!='.'){
//          displayarea.innerText= displayarea.innerText + buttontext
//          // }
//          // else if(!displayarea.innerText.includes('.')){
//          //    displayarea.innerText= displayarea.innerText + buttontext
//          // }
//       }
//    }
// }
// else{
//    if(buttontext=="CLR"){
//       displayarea.innerText='0'
//    }
//    else if(buttontext=='DEL'){
//       displayarea.innerText=displayarea.innerText.slice(0,-1)
//    }
//    else if(buttontext ==='='){
//       try{
//       displayarea.innerText= eval(displayarea.innerText)
//       }catch(error){
//          displayarea.innerText='0'
//       }
//    }
// }
// }

/************************************* */

   if(displayarea.innerText.length>=24){
      return
   }
   if(buttontext=="CLR"){
      displayarea.innerText='0'
      return
   }
   if(buttontext=='DEL'){
      displayarea.innerText=displayarea.innerText.slice(0,-1)
      return
   }
   if(buttontext ==='='){
      try{
      displayarea.innerText= eval(displayarea.innerText)
      }catch(error){
         displayarea.innerText='0'
      }
      return
   }
   if(displayarea.innerText=='0'){
      if(buttontext=='0' && buttontext=='00')
      return//dont do anything
         if(buttontext=='.' || isoperator(buttontext)){//
            displayarea.innerText= displayarea.innerText + buttontext
            return
         }
            displayarea.innerText=buttontext
      } 
   else{
      if(isoperator(displayarea.innerText[displayarea.innerText.length-1]) && isoperator(buttontext))
      {
         //replace operator if last digit is operator
         displayarea.innerText=displayarea.innerText.slice(0,-1)+ buttontext
         return
      }
         // if(buttontext!='.'){
         displayarea.innerText= displayarea.innerText + buttontext
         // }
         // else if(!displayarea.innerText.includes('.')){
         //    displayarea.innerText= displayarea.innerText + buttontext
         // }
   }
}