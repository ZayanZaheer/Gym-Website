function validateForm() {
    const form = document.getElementById('MembershipForm');
    const inputs = form.querySelectorAll('.info');
    let isValid = true;

    inputs.forEach(input => {
        if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && typeof input.value !== 'undefined') {
            if (!input.value.trim()) {
                isValid = false;
            }
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all the fields.');
    }
}

// Attach event listener to the submit button
const submitButton = document.getElementById('button1');
if (submitButton) {
    submitButton.addEventListener('click', validateForm);
}
