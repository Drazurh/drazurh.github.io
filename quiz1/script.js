/**
 * Created by john on 9/16/14.
 */

function change(){
    
   var input = document.getElementById('myTextField').value;
   if( input.length==0 ){
       alert('Write Some real Text please.');
   return;
   }
   
   var output = document.getElementById('output');
   output.innerHTML = input.toUpperCase();
    
}
