// Starter JS file

console.log("Social Impact Model Canvas loaded");

// Example: collapse/expand canvas sections
document.querySelectorAll('.box-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
