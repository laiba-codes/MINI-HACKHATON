
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("input[type=submit]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

     
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const rollNo = document.getElementById("birthdayDate").value.trim();
      const emailAddress = document.getElementById("emailAddress").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();

      if (firstName === "" || lastName === "" || rollNo === "" || emailAddress === "" || phoneNumber === "") {
        alert("Please fill out all the fields completely.");
      } else {
        window.location.assign('admin.html');
        alert("Form successfully submitted!");
        form.reset();
      }
    });
  });
