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
    
    {
        id: 4,
        title: "bakery",
        description: "cup cake",
        imageUrl: "C:/my projects/pinterest/images/Screenshot 2024-12-15 184958.png",
        likes: 92,
        comments: 10
    },

    {
        id: 5,
        title: "taperecorder",
        description: "good vibes",
        imageUrl: "C:/my projects/pinterest/images/Screenshot 2024-12-15 184958.png",
        likes: 292,
        comments: 50
    },

    {
        id: 6,
        title: "taperecorder",
        description: "good vibes",
        imageUrl: "C:/my projects/pinterest/images/Screenshot 2024-12-15 185517.png",
        likes: 192,
        comments: 20
    },

    {
        id: 7,
        title: "festival",
        description: "x-mas",
        imageUrl: "https://wallpapercave.com/wp/wp2663630.jpg",
        likes: 199,
        comments: 28
    },
     
    {
        id: 8,
        title: "asthetic",
        imageUrl: "https://i.pinimg.com/originals/59/b8/c8/59b8c8622c076c5dc7bac0dd591c712c.gif",
        likes: 121,
        comments: 25
    },

    {
        id: 9,
        title: "motivation",
        description: "personality",
        imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXYyeHJlcnBrdWVyeGxoa2NocWFzNG5tbXU1ZW4zbzV6c2ttMW9zMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOHwyaBU4zG80/giphy.webp",
        likes: 125,
        comments: 19
    }
    
];

// Pin Grid Layout
let currentLayout = 'masonry'; 

function createPinElement(pin) {
    const pinElement = document.createElement('div');
    pinElement.className = 'pin';
    
    const isNew = pin.id === 1; 
    
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