

document.addEventListener("DOMContentLoaded", () => {
  // Automatically start the tour on page load
  introJs()
    .setOptions({
      steps: [
        {
          element: '[data-step="1"]',
          intro:
            '<h2>Digital Presences</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>This card shows the annual recurring revenue for your business.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="2"]',
          intro:
            '<h2>Digital Presences</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>This card shows the annual recurring revenue for your business.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="3"]',
          intro:
            '<h2>Digital Presences</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>This card shows the annual recurring revenue for your business.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="4"]',
          intro:
            '<h2>Digital Presences</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>This card shows the annual recurring revenue for your business.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="5"]',
          intro:
            '<h2>Change Language</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>Here you can change language.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="6"]',
          intro:
            '<h2>Set Profile & Log Out</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>Here you can set your profile and log out.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        },
        {
          element: '[data-step="7"]',
          intro:
            '<h2>Calendar</h2><div style="display:flex;justify-content:space-between; gap:5px; "><p>Here you can see Calendar for meetings.</p><img width="40px" height="40px" src="assets/images/employer-ease-pics/popup_avatar.svg" alt="icon"/></div>',
          position: 'top'
        }
      ],
      showStepNumbers: true,
      showBullets: false,
      nextLabel: 'Next',
      prevLabel: false,
      skipLabel: '',
      doneLabel: 'Finish',
      showProgress: false,
      highlightClass: 'highlighted'
    })
    .start();
});
