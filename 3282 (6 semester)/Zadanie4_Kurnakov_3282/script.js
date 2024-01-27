function hw() {
  var name = document.forms.sign_in.name.value;
  var surname = document.forms.sign_in.surname.value;
  var otchestvo = document.forms.sign_in.otchestvo.value;
  var login = document.forms.sign_in.login.value;
  var password = document.forms.sign_in.password.value;
  var email = document.forms.sign_in.email.value;
  var agreement = document.forms.sign_in.agreement.value;
  var contact = document.forms.sign_in.contact.value;

  if (
    name != "" &&
    surname != "" &&
    otchestvo != "" &&
    login != "" &&
    password != "" &&
    email != "" &&
    agreement[0].checked &&
    contact.checked == true
  ) {
    alert("I am an alert box!");
  } else {
    alert("Конец.");
  }
}
