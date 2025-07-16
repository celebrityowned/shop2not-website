const fs = require('fs');
const path = require('path');

const categoriesDir = path.join(__dirname, 'categories');

// Get all category HTML files
const files = fs.readdirSync(categoriesDir).filter(f => f.endsWith('.html'));

// Build a list of all categories (slug and name from file name)
const categories = files.map(file => {
  const slug = file.replace('.html', '');
  // Convert slug to title case for display (replace dashes with spaces, capitalize words)
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { slug, name, file };
});

// Helper to generate related links HTML
function generateRelatedLinks(currentSlug) {
  // Exclude the current category
  const others = categories.filter(cat => cat.slug !== currentSlug);
  // Shuffle and pick 21
  const shuffled = others.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 21);
  let html = '<div class="other-categories">';
  html += '<h3>Explore Other Popular Categories</h3>';
  html += '<div class="category-links">';
  selected.forEach(cat => {
    html += `<a href="/categories/${cat.slug}.html">${cat.name}</a>`;
  });
  html += '</div></div>';
  return html;
}

files.forEach(file => {
  const filePath = path.join(categoriesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const slug = file.replace('.html', '');
  const relatedLinksHtml = generateRelatedLinks(slug);

  // Replace the contents of <div id="related-links"></div> (including any content inside)
  const relatedLinksRegex = /<div id="related-links">[\s\S]*?<\/div>/;
  if (relatedLinksRegex.test(content)) {
    content = content.replace(relatedLinksRegex, `<div id="related-links">${relatedLinksHtml}</div>`);
  } else {
    // If not found, insert before </main>
    content = content.replace('</main>', `<div id="related-links">${relatedLinksHtml}</div>\n</main>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated related links in ${file}`);
}); 