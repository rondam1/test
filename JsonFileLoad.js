function loadDoc() {
  "use strict";
  
  var myInit = {                   //initialize varible (optional)
				method: 'Get',
				header: {
					'Content-Type': 'application/json'
				},
					
				mode: 'cors',
				cache: 'default'};
  
  let myRequest = new Request("./js/json/data.json", myInit);  //myInit parameter optional for config flexibility using request object
  
  fetch(myRequest).then (function(resp){
	  return resp.json();
  })
  .then (function(data){
 	  return console.log(data);
  });
}