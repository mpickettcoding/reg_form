let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here

  //if nothing is entered print warning
  if(!(form.elements.username.value) && !(form.elements.email.value) && !(form.elements.password.value) && !(document.getElementById("yes").checked) && !(document.getElementById("no").checked) && !(form.elements.date.value)) {
    console.warn("You must enter some data to submit this form");
    return 0;
  }

  //group message
  console.group("========= Form Submission =========");

  //print username
  if(!form.elements.username.value) {
    console.log("Username: no submission");
  }
  else {
    console.log("Username: " + form.elements.username.value);
  }

  //print email
  if(!form.elements.email.value) {
    console.log("Email: no submission");
  }
  else {
    console.log("Email: " + form.elements.email.value);
  }

  //print newsletter result
  if(document.getElementById("yes").checked) {
    console.log("Newsletter: Yes");
  }

  else if(document.getElementById("no").checked) {
    console.log("Newsletter: No");
  }

  else {
    console.log("Newsletter: no submission");
  }

  //print date
  if(!form.elements.date.value) {
    console.log("Date: no submission");
  }
  else {
    console.log("Date: " + form.elements.date.value);
  }

  return 0;
}
