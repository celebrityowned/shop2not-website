// Universal Footer Loader
// This script loads the footer.html content into all pages

document.addEventListener('DOMContentLoaded', function() {
    // Find the footer element
    const footerElement = document.querySelector('.main-footer');
    
    if (footerElement) {
        // Load the footer content
        const currentPath = window.location.pathname;
        let footerPath;
        if (currentPath.includes('/categories/')) {
            footerPath = '../../components/footer.html';
        } else if (currentPath.includes('/pages/')) {
            footerPath = '../components/footer.html';
        } else {
            footerPath = 'components/footer.html';
        }
        fetch(footerPath)
            .then(response => response.text())
            .then(data => {
                footerElement.innerHTML = data;
                
                // Fix relative paths for different page locations
                if (currentPath.includes('/categories/')) {
                    // We're in a category page, need to fix relative paths
                    const links = footerElement.querySelectorAll('a[href]');
                    links.forEach(link => {
                        // Fix internal page links (but not external links like LinkedIn)
                        if (link.href.includes('pages/privacy.html')) {
                            link.href = '../../pages/privacy.html';
                        } else if (link.href.includes('pages/contact.html')) {
                            link.href = '../../pages/contact.html';
                        } else if (link.href.includes('pages/sitemap.html')) {
                            link.href = '../../pages/sitemap.html';
                        } else if (link.href.includes('pages/trademark-disclaimer.html')) {
                            link.href = '../../pages/trademark-disclaimer.html';
                        } else if (link.href.includes('categories/index.html')) {
                            link.href = '../index.html';
                        }
                    });
                } else if (currentPath.includes('/pages/')) {
                    // We're in a pages directory, need to fix relative paths
                    const links = footerElement.querySelectorAll('a[href]');
                    links.forEach(link => {
                        // Fix internal page links (but not external links like LinkedIn)
                        if (link.href.includes('pages/privacy.html')) {
                            link.href = 'privacy.html';
                        } else if (link.href.includes('pages/contact.html')) {
                            link.href = 'contact.html';
                        } else if (link.href.includes('pages/sitemap.html')) {
                            link.href = 'sitemap.html';
                        } else if (link.href.includes('pages/trademark-disclaimer.html')) {
                            link.href = 'trademark-disclaimer.html';
                        } else if (link.href.includes('categories/index.html')) {
                            link.href = '../categories/index.html';
                        }
                    });
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Fallback footer content
                footerElement.innerHTML = `
                    <div class="footer-content">
                        <div class="footer-contact">
                            <strong>Developed by</strong>&nbsp;<a href="https://www.linkedin.com/in/davidweinrot/" target="_blank" rel="noopener">David Weinrot</a>
                        </div>
                        <div class="footer-copyright">
                            &copy; 2025 Shop2not. All rights reserved.
                        </div>
                    </div>
                `;
            });
    }
}); 