/**
 * Section Lazy Loader - Scroll-based Progressive Loading
 * 
 * Loads heavy portfolio sections only when user scrolls near them.
 * Maintains single-page UX while improving initial load performance.
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        rootMargin: '200px', // Load sections 200px before they enter viewport
        threshold: 0.01
    };

    /**
     * Fetch and inject HTML content into a section
     * @param {HTMLElement} section - The section element to load content into
     * @param {string} url - URL of the HTML partial to fetch
     */
    async function loadSection(section, url) {
        try {
            // Show loading indicator
            section.classList.add('loading');
            
            // Fetch the HTML partial
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            
            // Inject the loaded HTML
            section.innerHTML = html;
            
            // Mark section as loaded
            section.classList.remove('loading', 'lazy-section');
            section.classList.add('loaded');
            
            // Dispatch custom event for analytics or further processing
            section.dispatchEvent(new CustomEvent('sectionLoaded', {
                bubbles: true,
                detail: { url, sectionId: section.id }
            }));
            
        } catch (error) {
            console.error(`Failed to load section from ${url}:`, error);
            
            // Show error message in section
            section.innerHTML = `
                <div class="container">
                    <div class="section-error">
                        <p>Failed to load content. Please refresh the page.</p>
                    </div>
                </div>
            `;
            section.classList.remove('loading');
            section.classList.add('error');
        }
    }

    /**
     * Initialize lazy loading for sections
     */
    function initLazyLoading() {
        // Find all lazy-loadable sections
        const lazySections = document.querySelectorAll('.lazy-section[data-src]');
        
        if (lazySections.length === 0) {
            return; // No lazy sections to load
        }

        // Create Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Check if section is intersecting (near viewport)
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const src = section.dataset.src;
                    
                    // Load the section
                    loadSection(section, src);
                    
                    // Stop observing this section (one-time load)
                    observer.unobserve(section);
                }
            });
        }, config);

        // Observe all lazy sections
        lazySections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            observer.disconnect();
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLazyLoading);
    } else {
        // DOM already loaded
        initLazyLoading();
    }

})();
