function validateForm() {
    var x = document.forms["userForm"]["fname"].value;
    if (x == "") {
      alert("Fill out the required form!");
      return false;
    }
    else{
        alert("Form has been submitted");
        document.getElementById('fname').value = '';
        return false;
    }
  }

  function validateForm() {
    var x = document.forms["userForm"]["mail"].value;
    if (x == "") {
      alert("Fill out the required form!");
      return false;
    }
    else{
        alert("Form has been submitted");
        document.getElementById('mail').value = ''
        return false;
    }
  }

  function validateForm() {
    var x = document.forms["userForm"]["con"].value;
    if (x == "") {
      alert("Fill out the required form!");
      return false;
    }
    else{
        alert("Form has been submitted");
        document.getElementById('con').value = ''
        return false;
    }
  }

  function validateForm() {
    var x = document.forms["userForm"]["subject"].value;
    if (x == "") {
      alert("Fill out the required form!");
      return false;
    }
    else{
        alert("Form has been submitted");
        document.getElementById('subject').value = ''
        return false;
    }
  }
