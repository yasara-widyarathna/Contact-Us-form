document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch('contact_process.php', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.status === 'success') {
                alert(result.message);
                contactForm.reset();
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
    });
});
