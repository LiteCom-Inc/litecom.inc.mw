import cors from '../node_modules/cors';

const scriptURL = "https://script.google.com/macros/s/AKfycbwp1g8lw-P6fnvYSpjRhyZEQS3wSo46SSZfwDcJ3x-NLVQhGtOEpcv-IFOejDEJ6kQAiw/exec";

const form = document.getElementById("quoteForm");
app.use(cors({
  origin : "https://script.google.com/macros/s/AKfycbwp1g8lw-P6fnvYSpjRhyZEQS3wSo46SSZfwDcJ3x-NLVQhGtOEpcv-IFOejDEJ6kQAiw/exec",
}))

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
