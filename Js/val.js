function validateForm() { 
var x = document.forms["signin"]["fname"].value;
var pw= document.getElementById("pwd").value;
var cw= document.getElementById("pwd2").value;
var e= document.getElementById("email").value; 
  var l =document.getElementById("lname").value;
 var m =document.getElementById("Mobileno").value;
 var emailexpression= /\S+@\S+\.\S+/;
var validation = emailexpression.test(document.getElementById("email").value);
val="";
userc="";
  if (x == "") {
    document.getElementById("ername").innerHTML="** Please fill the Name field"
    return false;
  }
  if(l==""){
    document.getElementById("erlname").innerHTML="** Please fill the last name field"
    return false;
  }
  if(e==""||!validation){
    if(e=="")
    {
    document.getElementById("eremail").innerHTML="** Please fill the Email field"
    }
    else if(!validation){
      document.getElementById("eremail").innerHTML="** Please enter correct email"
    }
    return false;
  }
  if(m==""||isNaN(m)){
    if(m==""){
    document.getElementById("ermob").innerHTML="** Please fill the Mobile field"
    }
    else if(isNaN(m))
    {
      document.getElementById("ermob").innerHTML="** Please fill only numbers"  
    }
    return false;
  }
  if(pw!=cw)
  {
    document.getElementById("erconf").innerHTML="** Password and confirm password did not match"
    return false;
  }
}