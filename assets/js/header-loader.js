// Universal Header Loader
// This script loads the header.html content into all pages

document.addEventListener('DOMContentLoaded', function() {
    // Find the header element
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Load the header content
        let headerPath;
        const currentPath = window.location.pathname;
        if (currentPath.includes('/categories/')) {
            headerPath = '../../components/header.html';
        } else if (currentPath.includes('/pages/')) {
            headerPath = '../components/header.html';
        } else {
            headerPath = 'components/header.html';
        }
        fetch(headerPath)
            .then(response => response.text())
            .then(data => {
                headerElement.innerHTML = data;
                // Fix relative paths for different page locations
                if (currentPath.includes('/categories/')) {
                    const links = headerElement.querySelectorAll('a[href]');
                    links.forEach(link => {
                        if (link.href.includes('index.html')) {
                            link.href = '../index.html';
                        }
                    });
                    const images = headerElement.querySelectorAll('img[src*="shop2not-hero-logo.png"]');
                    images.forEach(img => {
                        img.src = '../../assets/images/shop2not-hero-logo.png';
                    });
                } else if (currentPath.includes('/pages/')) {
                    const links = headerElement.querySelectorAll('a[href]');
                    links.forEach(link => {
                        if (link.href.includes('index.html')) {
                            link.href = '../index.html';
                        }
                    });
                    const images = headerElement.querySelectorAll('img[src*="shop2not-hero-logo.png"]');
                    images.forEach(img => {
                        img.src = '../assets/images/shop2not-hero-logo.png';
                    });
                }
                // Force a reflow to ensure styles are applied
                headerElement.offsetHeight;
                if (headerElement.style) {
                    headerElement.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error loading header:', error);
                // Fallback header content
                headerElement.innerHTML = `
                    <div class="main-header">
                        <h1 class="header-title">Shopify to Whatnot Export Tool</h1>
                        <a href="index.html">
                            <img src="assets/images/shop2not-hero-logo.png" alt="Shop2not logo" class="header-logo-wide">
                        </a>
                    </div>
                `;
            });
    }
}); 