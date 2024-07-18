document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navigation button');
    const sections = document.querySelectorAll('.container > section');
    const letsTalkButton = document.querySelector('.btn-talk');

    // Hide all sections by default except home
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('home').style.display = 'block';

    // Add click event to each button to show the corresponding section
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').replace('showSection(', '').replace(')', '').replace(/'/g, '');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked section
            const sectionToShow = document.getElementById(sectionId);
            sectionToShow.style.display = 'block';
            
            // Scroll to the clicked section
            sectionToShow.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add click event to the "Let's Talk" button to show the contact section
    letsTalkButton.addEventListener('click', function() {
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the contact section
        const contactSection = document.getElementById('contact');
        contactSection.style.display = 'block';
        
        // Scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
