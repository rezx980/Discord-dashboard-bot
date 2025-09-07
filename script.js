// Add any interactive features here.

// Example:  Simple alert
const addToDiscordButton = document.querySelector('.add-to-discord-button');

if (addToDiscordButton) {
  addToDiscordButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Adding to Discord (not functional in this demo)');
    // In a real bot, you'd redirect to the OAuth2 URL here.
  });
}
