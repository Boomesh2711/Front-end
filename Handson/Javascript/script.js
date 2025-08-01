var principle=document.getElementById("principal");
var Intrest=document.getElementById("Intrest");
var time=document.getElementById("time");
var intrest=document.getElementById("intrest");
var result=document.getElementById("result");

var addButton=document.getElementById("calculate");
addButton.addEventListener("click",validate);
function vali(principleValue) {
    if(principleValue >= 500 && principleValue <= 10000){
        return true;
    }
    else{
        return false;
    }
}
function bonus(addon) {
    if(time.value>=5) {
      return 2
    }
    return 0;
}
function validate() {

    var principleValue =parseFloat(principle.value);
    var intrestValue = parseFloat(Intrest.value);
    var timeValue = parseFloat(time.value);
    // intrest.textContent= "Intrest: " + ((principleValue * intrestValue * timeValue) / 100);
    //    result.textContent= "Total Amount: " + (principleValue+(principleValue * intrestValue * timeValue) / 100);
       var addon 
    try{ if(vali(principleValue)==false){
            throw new Error("Please enter a valid principal amount greater than 500");
           
        }
        addon = bonus(addon);
      if(principleValue<1000){
        intrest.textContent= "Intrest: " + ((principleValue * (5+ addon)* timeValue) / 100);
        result.textContent= "Total Amount: " + (principleValue+(principleValue * (5+ addon)* timeValue) / 100);
         Intrest.value= 5 + addon;

      }
      if(principleValue>=1000 && principleValue<=5000){
        intrest.textContent= "Intrest: " + ((principleValue * (7+ addon)* timeValue) / 100);
        result.textContent= "Total Amount: " + (principleValue+(principleValue * (7+ addon)* timeValue) / 100);
        Intrest.value= 7 + addon;
      }
      if(principleValue>5000 && principleValue<=10000){
        intrest.textContent= "Intrest: " + ((principleValue * (10+addon) * timeValue) / 100);
        result.textContent= "Total Amount: " + (principleValue+(principleValue * (10+ addon)* timeValue) / 100);
         Intrest.value= 10 + addon;
      }}
       catch(error){
        alert("An error occurred: " + error.message);
       }
    };
   
    


    
