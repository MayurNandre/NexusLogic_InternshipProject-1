
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const form = event.target;
        const formData = new FormData(form);


        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/thankyou.html'; // Redirect on success
                } else {
                    console.error('Submission failed with status:', response.status); // Log status code
                    alert('Submission failed. Please try again.'); // Alert on failure
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error); // Log fetch error
                alert('An error occurred. Please try again.'); // Alert on error
            });




        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             window.location.href = 'thankyou.html'; // Redirect on success
        //         } else {
        //             console.error('Submission failed with status:', response.status); // Log status code
        //             alert('Submission failed. Please try again.'); // Alert on failure
        //         }
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error); // Log fetch error
        //         alert('An error occurred. Please try again.'); // Alert on error
        //     });
    });
    window.location.href = '/thankyou.html'; 
});