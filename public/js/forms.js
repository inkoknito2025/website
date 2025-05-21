document.addEventListener('DOMContentLoaded', () => {
    // Reservation Form Handler
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(reservationForm);
            try {
                const response = await fetch('/api/reserve', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Object.fromEntries(formData)),
                });
                const result = await response.json();
                if (result.success) {
                    alert('Thank you! Your reservation request has been received.');
                    reservationForm.reset();
                } else {
                    alert('There was an error processing your reservation. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error processing your reservation. Please try again.');
            }
        });
    }

    // Contact Form Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Object.fromEntries(formData)),
                });
                const result = await response.json();
                if (result.success) {
                    alert('Thank you! Your message has been sent.');
                    contactForm.reset();
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });
    }
});