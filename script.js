function revealMessage() {
    const card = document.getElementById('message-card');
    
    // This "toggles" the reveal class on and off each time she clicks
    card.classList.toggle('reveal');
    
    // Optional: Add a little console log to make sure it's working
    console.log("Surprise revealed! 🐾");
}