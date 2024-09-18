let string = "";//ek variable liye jo ki empty ha 
let buttons = document.querySelectorAll('.button');//.buttton class sabhi button queryselectorall ki help se select krliya then jo bhi properties apply hoyegi buttons object mein vo sabhi button pr lgegi 
Array.from(buttons).forEach((button)=> {
  button.addEventListener('click', (e)=>{ //addEventlistener se ek event lga diya jisme ek function pass krdiya jo required ha and other 'click ' event diya jo click hone pr work krega 
    if(e.target.innerHTML == '=')
    {
      string = eval(string);//isse automatic value calculate hojayegi jo humne input mein denge with operator 
      document.querySelector('input').value= string;
    }
      else if(e.target.innerHTML == 'Del')
      {
       let obj= document.querySelector('input').value;
         obj= obj.slice(0,-1)//yaha slice work isliye kr raha kyoki humne input ko dom ki help se as a obejct mein convert krdiya hai then uske liye humne slice function use kr sakte ha and -1 se ek baar del pr click krne par only 1 current value delete hogi if hum -2 dete ha to 2 current value ek saath delete hojayegi 
        document.querySelector('input').value= obj;

        
      }
      else if(e.target.innerHTML == 'C')
    {
      string="";
      document.querySelector('input').value= string;
    }
  else{
    console.log(e.target);//jis bhi button pr click krenge vo value aa jayegi target krne pr 
    string = string + e.target.innerHTML;//string ke andar value vo aa jaye jispe hum click krenge
    document.querySelector('input').value = string;//jo value vo string me aayega usko input me daldenge 
  }
  })


})
