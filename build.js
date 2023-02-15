const fs = require('fs');
const path = require('path');
const sass = require('sass');

const distDir = path.join(__dirname, 'dist');
const srcDir = path.join(__dirname, 'src');

// create output directory
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// get a list of sites & loop them
const sites = fs.readdirSync(srcDir);
for (const site of sites) {
	console.log(`[sass] Compiling styles for ${site}.`); 
	const sassResult = sass.compile(path.join(srcDir, site, 'index.scss'));
	const outPath = path.join(distDir, `${site}.css`);
	console.log(`[sass] Writing styles to ${outPath}.`);
	fs.writeFileSync(outPath, sassResult.css);
}

