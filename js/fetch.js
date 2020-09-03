const api_url = 'https://reqres.in/api/users/' ;

async function getUser () {
const response = await fetch(api_url);
const data = await response.json();



document.getElementById('total').textContent = data.data.length;

 
 
 
 
 
  function generateTableHead (table, data) {
   let thead = table.createTHead();
   let row= thead.insertRow();
   for(let key of data) {
   let th = document.createElement("th");
   let text = document.createTextNode(key);
   th.appendChild(text);
   row.appendChild(th);
   }
   }
   
   
    function generateTable(table, data) {
	for (let element of data) {
	let row = table.insertRow();
	for (key in element) {
	let cell = row.insertCell();
	
	
	
	let text = document.createTextNode(element[key]);
	 
	cell.appendChild(text);
	
	}
	}
	}
	
	let table = document.querySelector("table");
	let data1 = Object.keys(data.data[0]);
	
	
	generateTableHead(table, data1);
   
  generateTable(table, data.data);
   
  console.log(table);
  
  
  
  

}


getUser()
.catch(error => {
console.log("error");
console.log(error);
});

