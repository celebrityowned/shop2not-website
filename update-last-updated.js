const fs = require('fs');
const path = require('path');

const categoriesDir = path.join(__dirname, 'categories');
const files = fs.readdirSync(categoriesDir).filter(f => f.endsWith('.html'));

// Format date as 'Month Day, Year'
function getFormattedDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

const newDate = getFormattedDate();

files.forEach(file => {
  const filePath = path.join(categoriesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace the date in <div class="last-updated">...</div>
  if (content.includes('class="last-updated"')) {
    content = content.replace(/<div class="last-updated">Last Updated: [^<]*<\/div>/, `<div class="last-updated">Last Updated: ${newDate}</div>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated date in ${file}`);
  }
}); 