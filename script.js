// Modal functionality for photographs
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Image protection - prevent downloads
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    }, false);

    // Disable common keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+P (Print/Save as PDF)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }
    }, false);

    // Prevent image selection
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        }, false);
        
        img.addEventListener('mousedown', function(e) {
            if (e.button === 1) { // Middle mouse button
                e.preventDefault();
                return false;
            }
        }, false);
    });

    // Add overlay to images to prevent direct access
    images.forEach(function(img) {
        img.style.userSelect = 'none';
        img.style.webkitUserSelect = 'none';
        img.style.mozUserSelect = 'none';
        img.style.msUserSelect = 'none';
        img.style.pointerEvents = 'auto';
        img.setAttribute('draggable', 'false');
    });
});
