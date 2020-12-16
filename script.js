// lab07 using some function   

var liv= "liverpool fan page" ; 
var livq = "are you liverpool fan ?" ;
var notliv = "what the name of your team"
var shot = "shot, liverpool better ( We will never walk alone ) "

var userInput ;
var total;
var item ;
var result;


alert(liv); 
 
if (prompt(livq )=="yes")
{ welcom();}

 else { notwelcom (); }
 
 ;

 count();
 

 function count ()
 {
     userInput = prompt('please enter how many Premier League did liverpool win in the last 30 years ?');
    while(userInput !=='1' && userInput !=='one') {
        userInput = prompt('Please renter numbers '); 
        
 }}
function showimg(){ 
 if(userInput === '1') {
    var item = '<img src="https://cdn3.volusion.com/uarwc.hcckz/v/vspfiles/photos/90-441-2T.jpg" />';
  } else if (userInput === 'one') {
   var  item = '<img src="data:image/png;base64,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" />';
  }
  return item; 
}






 function welcom ()  {
    alert ("welcom to the liverpool news page") ;
 }
    

 function notwelcom () {
    prompt( notliv) & alert(shot);

 }


function howmany (){
    let count = prompt('How many do you want to rate us?');
  
    while(count === '' || isNaN(count)) {
      count = prompt('Please enter a number!!');
    }
  
    return count;
  }



function loop() {
    let item=showimg();
    total = howmany();

    for(let i = 0; i < total; i++) {
        result = result +   i + ' ' + item + '</p>';
      }
      return result;
    }


