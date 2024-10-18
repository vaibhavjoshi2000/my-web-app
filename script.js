document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to a server
    alert('Form Submitted Successfully!');
  });

  document.getElementById('copyButton').addEventListener('click', function() {
    // Get the input values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Concatenate the input values
    const concatenatedData = `Name: ${name}\nAddress: ${address}\nPhone Number: ${phone}`;

    // Create a temporary textarea to copy the concatenated data
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = concatenatedData;
    document.body.appendChild(tempTextarea);

    // Select and copy the concatenated data
    tempTextarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Show the "Copied" message
    document.getElementById('clipboard-msg').style.display = 'block';

    // Display the copied data in the result textarea
    document.getElementById('resultArea').value = concatenatedData;

    // Hide the message after 2 seconds
    setTimeout(function() {
      document.getElementById('clipboard-msg').style.display = 'none';
    }, 2000);
  });

