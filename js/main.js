const FORMSPREE_ID = 'YOUR_FORM_ID'; // replace with your ID from formspree.io/f/xxxxxxxx

const form = document.getElementById('signupForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const phoneType = form.querySelector('#phone-type').value;

  if (!name || !email || !phoneType) return;

  const submitBtn = form.querySelector('.btn-submit');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      form.hidden = true;
      success.hidden = false;
    } else {
      submitBtn.textContent = 'Something went wrong — try again';
      submitBtn.disabled = false;
    }
  } catch {
    submitBtn.textContent = 'Network error — try again';
    submitBtn.disabled = false;
  }
});
