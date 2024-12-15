 /*jshint esversion: 6 */ 
 // Sample Pin Data
const pins = [
    {
        id: 1,
        title: "Retro Computer Setup",
        description: "Classic 90s workspace with CRT monitor",
        imageUrl: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500",
        likes: 128,
        comments: 32
    },
    {
        id: 2,
        title: "Vintage Gaming Console",
        description: "Original Nintendo Entertainment System",
        imageUrl: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=500",
        likes: 256,
        comments: 64
    },
    {
        id: 3,
        title: "90s Fashion",
        description: "Colorful windbreakers and high-top sneakers",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500",
        likes: 192,
        comments: 48
    },
    // Add more pins as needed
];

// Pin Grid Layout
let currentLayout = 'masonry'; // or 'grid'

function createPinElement(pin) {
    const pinElement = document.createElement('div');
    pinElement.className = 'pin';
    
    const isNew = pin.id === 1; // Example condition for new pins
    
    pinElement.innerHTML = `
        <div class="pin-image">
            <img src="${pin.imageUrl}" alt="${pin.title}">
            ${isNew ? '<img src="https://gifcities.org/api/gif/new" alt="New" class="new-icon blink">' : ''}
        </div>
        <h3 class="pin-title">${pin.title}</h3>
        <p class="pin-description">${pin.description}</p>
        <div class="pin-stats">
            <span>❤️ ${pin.likes}</span>
            <span>💬 ${pin.comments}</span>
        </div>
    `;
    
    return pinElement;
}

function renderPins() {
    const pinGrid = document.getElementById('pinGrid');
    pinGrid.innerHTML = '';
    pinGrid.className = `pin-grid ${currentLayout}`;
    
    pins.forEach(pin => {
        pinGrid.appendChild(createPinElement(pin));
    });
}

// Layout Toggle
const layoutToggle = document.getElementById('layoutToggle');
layoutToggle.addEventListener('click', () => {
    currentLayout = currentLayout === 'masonry' ? 'grid' : 'masonry';
    renderPins();
});