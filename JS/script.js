window.addEventListener('load', () => {
    const imageContainer = document.querySelector('.image-container');
    const recipeInfo = document.querySelector('.recipe-info');
    
    imageContainer.style.opacity = '1';
    imageContainer.style.transform = 'translateX(0)'; 

    recipeInfo.style.opacity = '1';
    recipeInfo.style.transform = 'translateX(0)'; 
});

document.addEventListener('DOMContentLoaded', function () {
    const directionsList = document.querySelector('.directions-list');
    const noteBox = document.querySelector('.note-box');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);
    if (directionsList) observer.observe(directionsList);
    if (noteBox) observer.observe(noteBox);
});
