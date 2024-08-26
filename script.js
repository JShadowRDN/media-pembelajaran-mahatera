function scrollToSection() {
    document.getElementById('pengertian').scrollIntoView({ behavior: 'smooth' });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('infoModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex'; // Change to 'flex' to show modal
    });

    // Close the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
