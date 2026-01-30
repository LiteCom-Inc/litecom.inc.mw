
  const scriptURL = "https://script.google.com/macros/s/AKfycbwzjlvstBCVGiP8DEXXtuuCYYqdOBLKbeOTenk9OcXHHYolUKF05Zadi2x5eHbww048mQ/exec";

  const form = document.getElementById("quoteForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    message: form.message.value,
    budget: form.budget.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => {
    alert("Quote submitted successfully!");
    form.reset();
  })
  .catch(() => {
    alert("Submission failed");
  });
});
