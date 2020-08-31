const api_url = 'https://reqres.in/api/users/' ;

async function getUser () {
const response = await fetch(api_url);
const data = await response.json();
console.log(data);

 
//get the length of the object i.e total numbers of members
document.getElementById("total").textContent = data.data.length;


// set the html tag id to have to collect the first data from the array of objects
// getting the data of the first member 
document.getElementById("member_id1").textContent = data.data[0].id;
document.getElementById("email_id1").textContent = data.data[0].email;
document.getElementById("first_name1").textContent = data.data[0].first_name;
document.getElementById("last_name1").textContent = data.data[0].last_name;
document.getElementById("avatar1").src = data.data[0].avatar;


// set the html tag id to have to collect the second data from the array of objects
// getting the data of the second member
 document.getElementById("member_id2").textContent = data.data[1].id;
document.getElementById("email_id2").textContent = data.data[1].email;
document.getElementById("first_name2").textContent = data.data[1].first_name;
document.getElementById("last_name2").textContent = data.data[1].last_name;
document.getElementById("avatar2").src = data.data[1].avatar;


// set the html tag id to have to collect the third data from the array of objects
// getting the data of the third member 
document.getElementById("member_id3").textContent = data.data[2].id;
document.getElementById("email_id3").textContent = data.data[2].email;
document.getElementById("first_name3").textContent = data.data[2].first_name;
document.getElementById("last_name3").textContent = data.data[2].last_name;
document.getElementById("avatar3").src = data.data[2].avatar;


// set the html tag id to have to collect the fourth data from the array of objects
// getting the data of the fourth member 
document.getElementById("member_id4").textContent = data.data[3].id;
document.getElementById("email_id4").textContent = data.data[3].email;
document.getElementById("first_name4").textContent = data.data[3].first_name;
document.getElementById("last_name4").textContent = data.data[3].last_name;
document.getElementById("avatar4").src = data.data[3].avatar;


// set the html tag id to have to collect the fifth data from the array of objects
// getting the data of the fifth member 
document.getElementById("member_id5").textContent = data.data[4].id;
document.getElementById("email_id5").textContent = data.data[4].email;
document.getElementById("first_name5").textContent = data.data[4].first_name;
document.getElementById("last_name5").textContent = data.data[4].last_name;
document.getElementById("avatar5").src = data.data[4].avatar;


// set the html tag id to have to collect the sixth data from the array of objects
// getting the data of the sixth member 
document.getElementById("member_id6").textContent = data.data[5].id;
document.getElementById("email_id6").textContent = data.data[5].email;
document.getElementById("first_name6").textContent = data.data[5].first_name;
document.getElementById("last_name6").textContent = data.data[5].last_name;
document.getElementById("avatar6").src = data.data[5].avatar;
}


getUser()
.catch(error => {
console.log("error");
console.log(error);
});

