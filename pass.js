<!--//
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
if (form.id.value=="tricksway") { 
if (form.pass.value=="12345") {              
location="http://www.cyberin.in" 
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
//-->