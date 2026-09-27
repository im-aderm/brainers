// Brainers Labs Contact Form Handler
(function() {
  'use strict';

  // Define the BrainersForm object that the page expects
  window.BrainersForm = {
    isConfigured: true,
    submitForm: async function(form) {
      try {
        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company') || '',
          message: formData.get('message'),
        };

        // Validate
        if (!data.name || !data.email || !data.message) {
          return { ok: false, error: 'Missing required fields' };
        }

        // Send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          return { ok: true, fallback: true };
        } else {
          return { ok: false, error: result.error || 'Failed to submit form' };
        }
      } catch (error) {
        console.error('Form submission error:', error);
        return { ok: false, error: 'Network error. Please try again.' };
      }
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const form = document.getElementById('contact-form');
    const note = document.getElementById('contact-note');

    if (form && note) {
      // Hide the "not connected" note since we now have a handler
      note.classList.remove('visible');
    }
  }
})();
