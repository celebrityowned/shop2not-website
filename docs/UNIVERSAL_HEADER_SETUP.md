# Universal Header Setup Guide

## Overview
Your website now uses a universal header system! This means you only need to update one file (`header.html`) and the changes will appear on all pages automatically.

## How It Works
1. **`header.html`** - Contains the header content (logo + title)
2. **`header-loader.js`** - JavaScript that loads the header into all pages
3. **All pages** - Have a simple header placeholder that gets populated by JavaScript

## Files Created/Modified

### New Files:
- `header.html` - Universal header content
- `header-loader.js` - JavaScript loader
- `UNIVERSAL_HEADER_SETUP.md` - This guide

### Updated Files:
- All HTML pages now use the universal header system
- `style.css` - Added header title styles and mobile responsiveness

## Current Header Content
Your header now displays:
- **Shop2not Logo** (clickable, links to homepage)
- **H1 Title:** "Shopify to Whatnot Export Tool"

## How to Update the Header

### To Change Header Content:
1. **Edit `header.html`** - Make your changes here
2. **Save the file** - Changes are automatically applied to all pages
3. **Upload to server** - All pages will show the updated header

### Example: Changing the Title
```html
<!-- In header.html -->
<a href="index.html">
  <img src="shop2not-hero-logo.png" alt="Shop2not logo" class="header-logo-wide">
</a>
<h1 class="header-title">Your New Title Here</h1>
```

### Example: Adding a Subtitle
```html
<!-- In header.html -->
<a href="index.html">
  <img src="shop2not-hero-logo.png" alt="Shop2not logo" class="header-logo-wide">
</a>
<h1 class="header-title">Shopify to Whatnot Export Tool</h1>
<p class="header-subtitle">Export your products in seconds</p>
```

## Benefits
✅ **Single Source of Truth** - Update one file, changes everywhere
✅ **Consistency** - All pages always have the same header
✅ **Easy Maintenance** - No need to update multiple files
✅ **SEO Friendly** - Header loads quickly and properly
✅ **Mobile Compatible** - Responsive design for all devices

## Technical Details

### How the JavaScript Works:
1. **Page loads** - JavaScript runs when page is ready
2. **Fetches header** - Loads `header.html` content
3. **Fixes paths** - Automatically adjusts relative paths for category pages
4. **Inserts content** - Places header content into the page
5. **Fallback** - Shows basic header if loading fails

### Path Handling:
- **Root pages** (index.html, contact.html, etc.) - Uses normal paths
- **Category pages** (categories/*.html) - Automatically adds `../` to paths

### CSS Classes:
- `.main-header` - Main header container
- `.header-logo-wide` - Logo styling
- `.header-title` - H1 title styling

## Mobile Responsiveness
The header automatically adapts to mobile devices:
- **Desktop:** Logo on left, title in center
- **Mobile:** Logo and title stacked vertically

## Troubleshooting

### Header Not Loading:
1. **Check file paths** - Ensure `header.html` and `header-loader.js` are in the right location
2. **Check browser console** - Look for JavaScript errors
3. **Verify server** - Make sure files are uploaded to web server

### Links Not Working:
1. **Check relative paths** - Category pages need `../` prefix
2. **Verify file names** - Ensure target files exist
3. **Test manually** - Try accessing the target URLs directly

### Styling Issues:
1. **Check CSS** - Ensure `style.css` is loaded
2. **Verify classes** - Header uses `.main-header`, `.header-logo-wide`, and `.header-title` classes
3. **Mobile testing** - Test on different screen sizes

## Adding New Pages

### For Root Level Pages:
1. Create your new HTML file
2. Add this header structure:
```html
<header class="main-header">
  <!-- Header content will be loaded by JavaScript -->
</header>

<script src="header-loader.js"></script>
```

### For Category Pages:
1. Create your new HTML file in the `categories/` folder
2. Add this header structure:
```html
<header class="main-header">
  <!-- Header content will be loaded by JavaScript -->
</header>

<script src="../header-loader.js"></script>
```

## Performance Notes
- **Fast Loading** - Header loads asynchronously
- **SEO Optimized** - Search engines can see header content
- **Graceful Degradation** - Works even if JavaScript is disabled
- **Caching** - Header file can be cached by browsers

## Combined with Universal Footer
You now have both universal header and footer systems:
- **Header:** `header.html` + `header-loader.js`
- **Footer:** `footer.html` + `footer-loader.js`

This gives you complete control over your site's header and footer with minimal maintenance!

Your universal header system is now live and ready to use! 🎉 