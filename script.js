// Card type selection with icons
const cardIcons = document.querySelectorAll('.card-icon');
const cardTypeSelect = document.getElementById('card-type');

cardIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove active class from all icons
        cardIcons.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked icon
        icon.classList.add('active');
        
        // Set the select value
        cardTypeSelect.value = icon.dataset.card;
    });
});

// Update icons when select changes
cardTypeSelect.addEventListener('change', () => {
    const value = cardTypeSelect.value;
    
    // Remove active class from all icons
    cardIcons.forEach(i => i.classList.remove('active'));
    
    // Add active class to matching icon
    if (value) {
        const matchingIcon = document.querySelector(`.card-icon[data-card="${value}"]`);
        if (matchingIcon) {
            matchingIcon.classList.add('active');
        }
    }
});

// Format card number input
const cardNumberInput = document.getElementById('card-number');

cardNumberInput.addEventListener('input', (e) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, '');
    
    // Add space after every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Update the input value
    e.target.value = value.trim();
});