document.addEventListener('DOMContentLoaded', function() {
    // Create the transition element
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);

    // Get all links that lead to internal pages
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="discover.html"], a[href^="team.html"], a[href^="matches.html"]');
    
    // Add click event listener to each internal link
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default navigation
            
            const targetHref = this.getAttribute('href');
            
            // Add transitioning class to body
            document.body.classList.add('transitioning');
            
            // Trigger slide-in animation
            transitionElement.classList.add('slide-in');
            
            // After slide-in animation completes, navigate to the new page
            setTimeout(function() {
                window.location.href = targetHref;
            }, 500); // Match this with the CSS transition duration
        });
    });
    
    // Handle page load animation (slide-out)
    window.addEventListener('load', function() {
        // If the transition element exists and we're coming from another page
        if (document.referrer.includes(window.location.hostname)) {
            transitionElement.classList.add('slide-out');
            
            // Remove the transitioning class after animation completes
            setTimeout(function() {
                document.body.classList.remove('transitioning');
                transitionElement.classList.remove('slide-out');
            }, 500); // Match this with the CSS transition duration
        }
    });
});