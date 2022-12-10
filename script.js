function validateForm() {
    let x = document.forms["myForm"]["First_Name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else{
        alert("Form Submitted");
        window.location.href = "account.html";
        return true;
    }
  }
function reset() {
    window.location.href = "form.html";
}

