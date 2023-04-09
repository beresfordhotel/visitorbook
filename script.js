const form = document.querySelector('#myForm');
const submitBtn = document.getElementById('submitBtn');
function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(form);
  const name = formData.get('name');
    // get the form data
    // var name = document.getElementById("name").value;
    // var company = document.getElementById("company").value;
    console.log("submitting form", name);
    location.href = "thankyoyu.html";
    // navigate to thankyou.html with the form data as URL parameters
    // window.location.href = "thankyoyu.html?name=" + name + "&company=" + company + "&comment=" + comment + "&timein=" + timein + "&timeout=" + timeout + "&date=" + date;
  }
  function navigateToGoogle() {
    window.location.href = "https://www.google.com";
  }
  window.addEventListener("load", function() {
    const form = document.getElementById('myForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      submitBtn.classList.add('loading');
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        location.href = "thankyoyu.html";

        // alert("Success!");
      })
    });
  });
