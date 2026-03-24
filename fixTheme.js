const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (file === 'WhatsAppButton.tsx' || (file === 'page.tsx' && fullPath.includes('apply'))) continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Theme fixes!
      content = content.replace(/text-white/g, 'text-slate-900');
      content = content.replace(/text-gray-400/g, 'text-slate-600');
      content = content.replace(/text-gray-300/g, 'text-slate-700');
      content = content.replace(/text-gray-200/g, 'text-slate-800');
      content = content.replace(/bg-background/g, 'bg-slate-50');
      content = content.replace(/bg-white\/5/g, 'bg-white');
      content = content.replace(/bg-white\/10/g, 'bg-slate-100');
      content = content.replace(/bg-white\/20/g, 'bg-slate-200');
      content = content.replace(/border-white\/5/g, 'border-slate-200');
      content = content.replace(/border-white\/10/g, 'border-slate-200');
      content = content.replace(/border-white\/20/g, 'border-slate-300');
      content = content.replace(/from-neon-blue/g, 'from-primary');
      content = content.replace(/to-white/g, 'to-slate-900');
      // Fix specific button classes
      content = content.replace(/hover:bg-white\/5/g, 'hover:bg-slate-100');
      content = content.replace(/hover:text-white/g, 'hover:text-primary');

      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInFiles(path.join(__dirname, 'src', 'app'));
replaceInFiles(path.join(__dirname, 'src', 'components'));
console.log("Theme classes updated.");
