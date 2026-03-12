// Added: Function to handle sign up form submission securely via JS
function handleSignup(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();
    
    // Retrieve all input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // Basic validation check directly in JS
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Log the input to console for testing purposes
    console.log('Sign up attempt:', { fullName, email, password, terms });
    
    // Display an alert greeting to confirm it accepts input successfully
    alert('Account successfully created for ' + fullName + ' (' + email + ')!');
    
    // Optional: Redirect back to the dashboard/store after successful sign up
    // window.location.href = "dashboard.html";
}
