document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', saveFormValues);
    } else {
        console.error("Button with ID 'saveButton' not found.");
    }

// Function to save form values to a file
function saveFormValues() {
    try {
      // Get form elements by their IDs
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const address2 = document.getElementById('address2').value;
      const country = document.getElementById('country').value;
      const state = document.getElementById('state').value;
      const zip = document.getElementById('zip').value;
  
      // Create a string with form values
      const formData = `First Name: ${firstName}\nLast Name: ${lastName}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nAddress 2: ${address2}\nCountry: ${country}\nState: ${state}\nZip: ${zip}`;
  
      // Create a Blob with the form data
      const blob = new Blob([formData], { type: 'text/plain;charset=utf-8' });
  
      // Create a temporary anchor element to trigger the download
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'contact_form_data.txt';
      a.style.display = 'none';
      document.body.appendChild(a);
  
      // Trigger the click event on the anchor element
      a.click();
  
      // Clean up
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error saving form values:', error);
    }
  }
});
  