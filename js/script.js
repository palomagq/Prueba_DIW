document.querySelectorAll('.producto').forEach(item => {
    item.addEventListener('mouseover', () => {
        const description = document.createElement('div');
        description.textContent = 'Descripción breve del disco.';
        description.className = 'hover-description';
        item.appendChild(description);
    });
    item.addEventListener('mouseout', () => {
        const description = item.querySelector('.hover-description');
        if (description) {
            description.remove();
        }
    });
});
