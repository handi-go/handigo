
// // fetch(`/pages/components/${partial}.html`)

// function loadPartial(partial, containerId) {
//     fetch(`/pages/components/${partial}.html`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to load ${partial}: ${response.statusText}`);
//         }
//         return response.text();
//       })
//       .then(data => {
//         document.getElementById(containerId).innerHTML = data;
//       })
//       .catch(error => console.error(error));
//   }

//   // Load partials
//   document.addEventListener("DOMContentLoaded", () => {
//     loadPartial('header', 'header');
//     loadPartial('navbar', 'navbar');
//     loadPartial('footer', 'footer');
//   });


'use strict';

// Select all FAQ containers and answer elements
const faqs = document.querySelectorAll('.card-wrapper');
const answers = document.querySelectorAll('.answer');

faqs.forEach(faq => {
  faq.addEventListener('click', (e) => {
    const answer = faq.querySelector('.answer');  // Get the corresponding answer
    const svgElement = faq.querySelector('svg');  // Get the SVG inside the FAQ

    // If an SVG element exists, toggle its rotation
    if (svgElement) {
      svgElement.classList.toggle('rotate180')
    }

    // Check if the clicked answer is already active
    const isActive = answer.classList.contains('active');

    // Close all other answers and icons
    answers.forEach(ans => {
      ans.classList.remove('active');  // Close all other answers
      ans.previousElementSibling.classList.remove('active');  // Remove active from all question icons
    });

    // If the clicked answer is not active, open it
    if (!isActive) {
      answer.classList.add('active');  // Open the clicked answer
      answer.previousElementSibling.classList.add('active');  // Add active to the question icon
      faq.querySelector('.question-icon').classList.add('active');  // Make sure the correct icon gets active
    }
  });
});




