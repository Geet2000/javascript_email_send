
let Name= document.getElementById("name");
let email= document.getElementById('email');
let msg= document.getElementById('message');
function sendemail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "your_email_address",
	Password : "password",
	To : email.value, //recipent address
	From : "your_email_address",
	Subject : Name.value, //Subject Name
	Body : msg.value,   //Subject Message
	}).then(
		message => alert("mail sent successfully")
	);
}