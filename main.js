// let submit= document.querySelector("[type='submit']");
let Name= document.getElementById("name");
let email= document.getElementById('email');
let msg= document.getElementById('message');
function sendemail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "geetgovindsingh.moodel@gmail.com",
	Password : "geet1234",
	To : email.value,
	From : "geetgovindsingh.moodel@gmail.com",
	Subject : Name.value,
	Body : msg.value,
	}).then(
		message => alert("mail sent successfully")
	);
}