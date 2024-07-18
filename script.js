document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navigation button');
    const sections = document.querySelectorAll('.container > section');

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
});

function showSection(sectionId) {
    // This function is left here in case other scripts reference it
}
