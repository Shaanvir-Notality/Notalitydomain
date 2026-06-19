const form = document.getElementById('signupForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const phoneType = form.querySelector('#phone-type').value;

  if (!name || !email || !phoneType) return;

  form.hidden = true;
  success.hidden = false;
});
