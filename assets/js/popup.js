document.addEventListener("DOMContentLoaded", () => {
  const tour = introJs()
      .setOptions({
          steps: [
              {
                  element: '[data-step="1"]',
                  intro: '<h2>Digital Presences</h2><p>This card shows the annual recurring revenue for your business.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="2"]',
                  intro: '<h2>Digital Presences</h2><p>This card shows the annual recurring revenue for your business.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="3"]',
                  intro: '<h2>Digital Presences</h2><p>This card shows the annual recurring revenue for your business.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="4"]',
                  intro: '<h2>Digital Presences</h2><p>This card shows the annual recurring revenue for your business.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="5"]',
                  intro: '<h2>Change Language</h2><p>Here you can change language.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="6"]',
                  intro: '<h2>Set Profile & Log Out</h2><p>Here you can set your profile and log out.</p>',
                  position: 'top'
              },
              {
                  element: '[data-step="7"]',
                  intro: '<h2>Calendar</h2><p>Here you can see the Calendar for meetings.</p>',
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
          highlightClass: 'highlighted',
          disableInteraction: true
      })
      .onbeforechange(function (targetElement) {
          removeTourEffects(); 
          addTourEffects(targetElement);
      })
      .oncomplete(removeTourEffects) 
      .onexit(removeTourEffects)
      .start();
});


function addTourEffects(element) {
  element.classList.add("active-tour-step");

  if (!element.querySelector(".center-dot")) {
      let centerDot = document.createElement("div");
      centerDot.classList.add("center-dot");
      element.appendChild(centerDot);
  }

  if (!element.querySelector(".right-dot")) {
      let rightDot = document.createElement("div");
      rightDot.classList.add("right-dot");
      element.appendChild(rightDot);
  }
}

function removeTourEffects() {
  document.querySelectorAll(".active-tour-step").forEach((el) => {
      el.classList.remove("active-tour-step");
      const centerDot = el.querySelector(".center-dot");
      const rightDot = el.querySelector(".right-dot");
      if (centerDot) centerDot.remove();
      if (rightDot) rightDot.remove();
  });
}
