 /*jshint esversion: 6 */ 
 // Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initial render of pins
    renderPins();
    
    // Add Windows 95 cursor to all elements
    document.body.style.cursor = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASDiAyAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfkBQsRBSr2X3ihAAAAO0lEQVQoz2NgAANGQQYwYGBgEAYzgkUZXMFCEiAhYzADLMQKZkSLghhGYAZQSBjCgJkEFhIAM4xwWAEAK2MExZdUqgUAAAAASUVORK5CYII="), auto`;
});