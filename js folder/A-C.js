function handleContact(e){ 
    e.preventDefault();
     // Stop form from reloading the page 
     const name = document.getElementById("name").value;
     // Show confirmation text
      document.getElementById("confirmationMessage").innerText = 'Thank you, ${name}! Your message has been sent.';
       // Reset the form fields
     document.getElementById("contactForm").reset(); 
}
