(function (window) {
  "use strict";

  // Set this to a form-backend endpoint (e.g. https://formspree.io/f/xxxxxxx or
  // https://api.web3forms.com/submit) to activate real email delivery.
  // Until it's set, forms still validate and show a graceful fallback message
  // asking the user to email info@brainerslabs.com directly.
  var FORM_ENDPOINT = "";
  var FALLBACK_EMAIL = "info@brainerslabs.com";

  async function submitForm(formEl, extra) {
    var data = new FormData(formEl);
    if (extra) {
      Object.keys(extra).forEach(function (key) {
        data.append(key, extra[key]);
      });
    }

    if (!FORM_ENDPOINT) {
      // No backend configured yet — treat as a soft success so the UI can
      // show its fallback messaging instead of a hard error.
      return { ok: false, fallback: true };
    }

    try {
      var res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      return { ok: res.ok, fallback: false };
    } catch (err) {
      return { ok: false, fallback: false, error: err };
    }
  }

  window.BrainersForm = {
    submitForm: submitForm,
    isConfigured: !!FORM_ENDPOINT,
    FALLBACK_EMAIL: FALLBACK_EMAIL
  };
})(window);
