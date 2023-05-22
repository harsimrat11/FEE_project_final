

// Get the show panel element
const showPanel = document.getElementById("contact-panel");

// Display all the contacts in the show panel when the page loads
window.addEventListener("load", () => {
  // Get the contacts from local storage
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // If there are no contacts, display a message indicating no contacts
  if (contacts.length === 0) {
    showPanel.textContent = "No contacts found";
  }
  else
  {

    // Filter the contacts whose name contains the search term

    // If there are no matching contacts
    if (contacts.length === 0) {
      // Display a message indicating no results
      showPanel.textContent = "No matching contacts found.";
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
      contacts.forEach((contact) => {
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
      showPanel.appendChild(table);
    }
  }
})
