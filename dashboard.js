function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function() {
        if (direction === 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        
        // Stop the timer once we've reached the desired distance
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}
function openPreview(name, price, desc) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-description').innerText = desc;
    document.getElementById('product-modal').style.display = 'flex';
}

function closePreview() {
    document.getElementById('product-modal').style.display = 'none';
}

// Close modal if user clicks outside the white box
window.onclick = function(event) {
    let modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closePreview();
    }
}
const dealsContainer = document.getElementById('deals-container');
const dealCards = document.querySelectorAll('.deal-card');

dealsContainer.addEventListener('scroll', () => {
    // Find the horizontal center of the visible scroll area
    const containerCenter = dealsContainer.scrollLeft + (dealsContainer.offsetWidth / 2);

    dealCards.forEach(card => {
        // Find the center of the card
        const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
        
        // Check if the card is near the center (within 150 pixels)
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < 150) {
            card.classList.add('active-scroll');
        } else {
            card.classList.remove('active-scroll');
        }
    });
});

// Run once on page load to highlight the first item
dealsContainer.dispatchEvent(new Event('scroll'));
