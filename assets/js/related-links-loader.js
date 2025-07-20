// related-links-loader.js

// Mapping of category slugs to related categories
const relatedCategories = {
  "designer-sneakers": [
    { slug: "streetwear", name: "Streetwear" },
    { slug: "womens-apparel", name: "Women's Apparel" },
    { slug: "handbags", name: "Handbags" }
  ],
  "funko-pop-collectibles": [
    { slug: "disneyana", name: "Disneyana" },
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "video-games", name: "Video Games" }
  ],
  "vintage-sports-cards": [
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "jewelry", name: "Jewelry" },
    { slug: "streetwear", name: "Streetwear" },
    { slug: "handbags", name: "Handbags" },
    { slug: "womens-apparel", name: "Women's Apparel" },
    { slug: "beauty-cosmetics", name: "Beauty & Cosmetics" },
    { slug: "designer-sneakers", name: "Designer Sneakers" },
    { slug: "funko-pop-collectibles", name: "Funko Pop Collectibles" },
    { slug: "video-games", name: "Video Games" },
    { slug: "disneyana", name: "Disneyana" }
  ],
  "magic-the-gathering": [
    { slug: "pokemon-cards", name: "Pokemon Cards" },
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "graded-pokemon-cards", name: "Graded Pokémon Cards" }
  ],
  "yu-gi-oh": [
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "one-piece-tcg", name: "One Piece TCG" },
    { slug: "magic-the-gathering", name: "Magic: The Gathering" }
  ],
  "one-piece-tcg": [
    { slug: "yu-gi-oh", name: "Yu-Gi-Oh!" },
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "magic-the-gathering", name: "Magic: The Gathering" }
  ],
  "disney-tcg": [
    { slug: "trading-cards", name: "Trading Cards" },
    { slug: "funko-pop-collectibles", name: "Funko Pop Collectibles" },
    { slug: "video-games", name: "Video Games" }
  ],
  "football-cards": [
    { slug: "graded-sports-cards", name: "Graded Sports Cards" },
    { slug: "autographed-sports-cards", name: "Autographed Sports Cards" },
    { slug: "trading-cards", name: "Trading Cards" }
  ],
  "basketball-cards": [
    { slug: "graded-sports-cards", name: "Graded Sports Cards" },
    { slug: "autographed-sports-cards", name: "Autographed Sports Cards" },
    { slug: "trading-cards", name: "Trading Cards" }
  ],
  "baseball-cards": [
    { slug: "graded-sports-cards", name: "Graded Sports Cards" },
    { slug: "autographed-sports-cards", name: "Autographed Sports Cards" },
    { slug: "trading-cards", name: "Trading Cards" }
  ],
  "ufc-cards": [
    { slug: "graded-sports-cards", name: "Graded Sports Cards" },
    { slug: "autographed-sports-cards", name: "Autographed Sports Cards" },
    { slug: "trading-cards", name: "Trading Cards" }
  ],
  "graded-pokemon-cards": [
    { slug: "pokemon-cards", name: "Pokemon Cards" },
    { slug: "magic-the-gathering", name: "Magic: The Gathering" },
    { slug: "graded-sports-cards", name: "Graded Sports Cards" }
  ],
  "graded-sports-cards": [
    { slug: "football-cards", name: "Football Cards" },
    { slug: "basketball-cards", name: "Basketball Cards" },
    { slug: "baseball-cards", name: "Baseball Cards" }
  ],
  "autographed-sports-cards": [
    { slug: "graded-sports-cards", name: "Graded Sports Cards" },
    { slug: "football-cards", name: "Football Cards" },
    { slug: "basketball-cards", name: "Basketball Cards" }
  ]
};

// Helper to get current category slug from URL
function getCurrentCategorySlug() {
  const match = window.location.pathname.match(/categories\/(.*?)\.html$/);
  return match ? match[1] : null;
}

function renderRelatedLinks() {
  const slug = getCurrentCategorySlug();
  const related = relatedCategories[slug];
  const container = document.getElementById('related-links');
  if (!container || !related) return;

  let html = '<div class="other-categories">';
  html += '<h3>Explore Other Popular Categories</h3>';
  html += '<div class="category-links">';
  related.forEach(cat => {
    html += `<a href="/categories/${cat.slug}.html">${cat.name}</a>`;
  });
  html += '</div></div>';
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderRelatedLinks); 