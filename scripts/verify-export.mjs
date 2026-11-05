import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const root = 'out';
const pages = ['404.html', 'index.html', 'resume/index.html', ...['parallel','memoryfence','marketpulse','safetylens'].map(slug=>`projects/${slug}/index.html`)];
let links = 0;
if (/prefers-color-scheme:dark/.test(readFileSync(join(root,'404.html'),'utf8'))) throw new Error('Default dark 404 theme must not be exported');
for (const page of pages) {
  const html = readFileSync(join(root,page),'utf8');
  if ((html.match(/<h1\b/g)||[]).length !== 1) throw new Error(`${page}: expected one h1`);
  if (/\bGPA\b|grade point average|fall-detected\.png|safetylens\.png|tel:\+1813/i.test(html)) throw new Error(`${page}: prohibited content`);
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!raw.startsWith('/') && !raw.startsWith('#')) continue;
    const url = new URL(raw,`https://portfolio.test/${page.replace('index.html','')}`);
    const pathname = decodeURIComponent(url.pathname);
    const target = join(root, pathname.endsWith('/') ? `${pathname}index.html` : pathname);
    if (!existsSync(target)) throw new Error(`${page}: missing ${raw}`);
    if (url.hash && target.endsWith('.html')) {
      const content=readFileSync(target,'utf8');
      if (!content.includes(`id="${url.hash.slice(1)}"`)) throw new Error(`${page}: missing anchor ${raw}`);
    }
    links++;
  }
}
if(readdirSync(join(root,'images/projects')).some(name=>name==='safetylens.png'||name.includes('fall-detected'))) throw new Error('Prohibited media exported');
console.log(`Verified ${pages.length} portfolio pages, ${links} local links/assets, headings, anchors and prohibited-content checks.`);
