document.addEventListener("DOMContentLoaded", () => {
    const tour = introJs()
        .setOptions({
            steps: [
                {
                    element: '[data-step="1"]',
                    intro: `
                    <h2>Onboarding & Walkthroughs</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>This step provides an overview of the platform, tools, and resources available to help you efficiently navigate the business setup process.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Onboarding" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="2"]',
                    intro: `
                    <h2>Business Planning</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>Laying a strong foundation starts with a well-thought-out plan. In this step, you will define your business goals, conduct market research.</p>
                            <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Onboarding" style="width:40px; height:40px;">   
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="3"]',
                    intro: `
                    <h2>Formation</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>Register your business as an LLC, appoint a registered agent, and obtain an Employer Identification Number (EIN) to comply with regulations.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Formation" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="4"]',
                    intro: `
                    <h2>Digital Presence</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>Your online identity is crucial in today’s digital world. This step involves securing a domain name, designing a website, creating a professional logo and branding materials.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Digital Presence" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="5"]',
                    intro: `
                    <h2>Communications</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>This step involves setting up a business phone, email, and messaging platforms to ensure seamless interactions with clients, employees, and partners.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Communications" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="6"]',
                    intro: `
                    <h2>Document Center</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>This step focuses on setting up cloud storage solutions for organizing contracts, invoices, business plans, and other critical documents.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Document Center" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="7"]',
                    intro: `
                    <h2>Finance Hub</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>Manage your business finances effectively by connecting your bank accounts, reviewing funding options, and setting up insurance for financial protection.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Finance Hub" style="width:40px; height:40px;">
                        </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="8"]',
                    intro: `
                    <h2>Accounting Services</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>In this step, you will set up accounting software and services to handle tax compliance, payroll, and financial reporting with ease.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Accounting Services" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                },
                {
                    element: '[data-step="9"]',
                    intro: `
                    <h2>Workforce Solutions</h2>
                        <div style="display: flex; align-items: center; gap: 15px;">
                        
                        <p>If you are planning to hire employees or work with contractors, this step will guide you through setting up HR and payroll systems.</p>
                        <img height="40px" height="40px" src="./assets/images/employer-ease-pics/popup_avatar.svg" alt="Workforce Solutions" style="width:40px; height:40px;">
                            </div>
                        </div>`,
                    position: 'top'
                }
            ],
            showStepNumbers: true,
            showBullets: false,
            nextLabel: 'Next',
            prevLabel: 'Previous',
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
}

function removeTourEffects() {
    document.querySelectorAll(".active-tour-step").forEach((el) => {
        el.classList.remove("active-tour-step");
    });
}
