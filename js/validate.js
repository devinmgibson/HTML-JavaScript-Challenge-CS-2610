function validateForm(){
  var firstName = document.forms["contactShaedy"]["firstname"].value;
  var lastName = document.forms["contactShaedy"]["lastname"].value;
  var email = document.forms["contactShaedy"]["email"].value;
  var confirmEmail = document.forms["contactShaedy"]["confirmEmail"].value;

  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
  }
  else if(firstName == "" || lastName == "" || email == ""){
    alert("Please make sure you have provided your first and last name and your email.");
    return false;
  }
  else if(email != confirmEmail){
    alert("Please make sure your email matches");
    return false;
  }
  else {
    alert("Thank you for interest! May you ever to closer to God!")
  }
}
