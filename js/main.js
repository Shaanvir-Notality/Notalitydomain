const MC_U    = 'b76e13b4e5d818dcdd8d7fa73';
const MC_ID   = '625d0d595c';
const MC_F_ID = '0095d7e1f0';

const form      = document.getElementById('signupForm');
const success   = document.getElementById('formSuccess');
const consent   = document.getElementById('marketingConsent');
const submitBtn = form.querySelector('.btn-submit');

consent.addEventListener('change', function () {
  submitBtn.disabled = !this.checked;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fname     = form.querySelector('#fname').value.trim();
  const lname     = form.querySelector('#lname').value.trim();
  const email     = form.querySelector('#email').value.trim();
  const phoneType = form.querySelector('#phone-type').value;

  if (!email || !phoneType) return;

  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  const callbackName = 'mc_cb_' + Date.now();

  const params = new URLSearchParams({
    u:                               MC_U,
    id:                              MC_ID,
    f_id:                            MC_F_ID,
    EMAIL:                           email,
    FNAME:                           fname,
    LNAME:                           lname,
    MMERGE7:                         phoneType,
    ['b_' + MC_U + '_' + MC_ID]:    '',
    c:                               callbackName,
  });

  const script = document.createElement('script');
  let done = false;

  const timer = setTimeout(function () {
    if (done) return;
    done = true;
    cleanup();
    submitBtn.textContent = 'Request timed out — try again';
    submitBtn.disabled = false;
  }, 10000);

  function cleanup() {
    clearTimeout(timer);
    delete window[callbackName];
    if (script.parentNode) script.parentNode.removeChild(script);
  }

  window[callbackName] = function (data) {
    if (done) return;
    done = true;
    cleanup();

    if (data.result === 'success') {
      form.hidden = true;
      success.hidden = false;
    } else {
      const msg = (data.msg || '').toLowerCase();
      if (msg.includes('already subscribed')) {
        submitBtn.textContent = "You're already signed up!";
      } else {
        submitBtn.textContent = 'Something went wrong — try again';
      }
      submitBtn.disabled = false;
    }
  };

  script.onerror = function () {
    if (done) return;
    done = true;
    cleanup();
    submitBtn.textContent = 'Network error — try again';
    submitBtn.disabled = false;
  };

  script.src = 'https://notality.us9.list-manage.com/subscribe/post-json?' + params;
  document.body.appendChild(script);
});
