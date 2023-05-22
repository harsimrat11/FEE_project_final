
const contactForm = document.getElementById("contact");

// Add a submit event listener to the contact form
contactForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the contact input fields
  const name = event.target.person.value.trim();
  const phone = event.target.phone.value.trim();
  const email = event.target.email.value.trim();
  const address = event.target.address.value.trim();

  // If any input field is empty, display an error message
  if (name === "" || phone === "" || email === "" || address === "") {
    alert("Please fill out all the fields.");
    return;
  }

  // Get the contacts from local storage
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // Add the new contact to the contacts array
  contacts.push({ name, phone, email, address });

  // Store the updated contacts array in local storage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Clear the contact input fields
  event.target.person.value = "";
  event.target.phone.value = "";
  event.target.email.value = "";
  event.target.address.value = "";

  // Display a success message
  alert("Contact added successfully.");
});
