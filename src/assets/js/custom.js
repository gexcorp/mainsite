// custom.js

// mailchimp newsletter sign up form reset after submission
function submitForm() {
  // Get the first form with the name
  // Hopefully there is only one, but there are more, select the correct index
  var frm = document.getElementsByName('#mc_embed_signup')[0];
  frm.submit(); // Submit
  frm.reset();  // Reset
  return false; // Prevent page refresh
}

