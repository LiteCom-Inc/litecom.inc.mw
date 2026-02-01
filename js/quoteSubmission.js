const scriptURL = "https://script.google.com/macros/s/AKfycbxFvvNEnMFP4RRAwJOTqsb7SDcWesG_ZYyX2ww_CWX8Z3j-cyeU1YBoYQydF_nk55wxaw/exec";

const form = document.getElementById("quoteForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new URLSearchParams({
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    message: form.message.value,
    budget: form.budget.value
  });

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
  .then(res => res.json())
  .then(() => {
    alert("Quote submitted successfully!");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("Submission failed");
  });
});
