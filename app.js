
// fetch(`/pages/components/${partial}.html`)

function loadPartial(partial, containerId) {
    fetch(`/pages/components/${partial}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${partial}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error(error));
  }

  // Load partials
  document.addEventListener("DOMContentLoaded", () => {
    loadPartial('header', 'header');
    loadPartial('navbar', 'navbar');
    loadPartial('footer', 'footer');
  });
