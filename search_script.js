// Get the search form and results container elements
const searchForm = document.getElementById("search");
const searchResults = document.getElementById("results");

// Add a submit event listener to the search form
searchForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the search input field
  const searchTerm = event.target.search.value.trim();

  // Clear the search results container
  searchResults.innerHTML = "";

  // If the search term is not empty
  if (searchTerm !== "") {
    // Get the contacts from local storage
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Filter the contacts whose name contains the search term
    const filteredContacts = contacts.filter(
      (contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // If there are no matching contacts
    if (filteredContacts.length === 0) {
      // Display a message indicating no results
      searchResults.textContent = "No matching contacts found.";
    } else {
      // Create a table to display the matching contacts
      const table = document.createElement("table");
      table.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      `;

      // Add a row for each matching contact
      filteredContacts.forEach((contact) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.phone}</td>
          <td>${contact.email}</td>
          <td>${contact.address}</td>
        `;
        table.appendChild(row);
      });

      // Add the table to the search results container
      searchResults.appendChild(table);
    }
  }
});

// Get the contact form element
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

// Get the show panel element
const showPanel = document.getElementById("show-panel");

// Display all the contacts in the show panel when the page loads
window.addEventListener("load", () => {
  // Get the contacts from local storage
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // If there are no contacts, display a message indicating no contacts
  if (contacts.length === 0) {
    showPanel.textContent = "No contacts found";
  }
})
