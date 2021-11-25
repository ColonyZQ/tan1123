// JavaScript Document
function checkForm(obj)
	{
var login = document.getElementById("login");
var password = document.getElementById("password");
var email = document.getElementById("email");
var emailPassword = document.getElementById("emailassword");
var cris = document.getElementById("cris");
var regEmail = /[0-9a-z_]+@[0-9a-z_^.]+.[a-z]{2,3}/i;
var regLogin = /[а-я]/i;
var regCris = /[0-9]/i; 



if (login.value == ''){
		alert("Не заполнено поле \"Позывной\"");
		login.value = '';
		login.className = "empty";
		login.focus();
		return false;}
		
if (regLogin.exec(login.value)){
		login.className = "";
		alert("Не верный позывной");
		login.value = '';
		login.className = "empty";
		login.focus();
		return false;}
		
if (password.value == ''){
		login.className = "";
		alert("Не заполнено поле \"Пароль\"");
		password.value = '';
		password.className = "empty";
		password.focus();
		return false;}
		password.className = "";

for (var i = 0; i < obj.length; i++)
if (obj[i].checked)
	
	var Rank = obj[i].value;
	
	 if (!Rank){
		 alert("Не указано поле \"Ранг\"");
		 return false;
		 }
		
if (email.value == ''){
		alert("Почтовый ящик не указан");
		email.value = '';
		email.className = "empty";
		email.focus();
		return false;}
		
if (regEmail.exec(email.value)){
		}else{
		alert("Не верный почтовый ящик");
		email.value = '';
		email.className = "empty";
		email.focus();
		return false;
			}
		
if (emailPassword.value == ''){
		email.className = "";
		alert("Не заполнено поле \"Пароль\"");
		emailPassword.value = '';
		emailPassword.className = "empty";
		emailPassword.focus();
		return false;}

if(!regCris.exec(cris.value))
		{emailPassword.className = "";
		alert("Введите количество кристалов");
		cris.value = '';
		cris.className = "empty";
		cris.focus();
		return false;}	
	}