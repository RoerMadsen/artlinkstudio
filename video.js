document.addEventListener('DOMContentLoaded', function () {
    // Find videoelementet
    const video = document.querySelector('.visible-video');

    // Konfigurer indstillinger for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Juster dette threshold-værdi efter behov (0.5 betyder, at mindst 50% af elementet skal være synligt)
    };

    // Opret en Intersection Observer med en callback-funktion
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hvis videoen er synlig, start den
                video.play();
                // Stop observeren, da vi ikke længere har brug for at observere
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observeren ved at observere video-elementet
    videoObserver.observe(video);
});
