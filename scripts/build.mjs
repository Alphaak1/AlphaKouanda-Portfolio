import { mkdir, readdir, copyFile, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const files = (await readdir(root)).filter(name => /\.(html|css|jpg|jpeg|png|webp|svg|ico|mp4)$/i.test(name));
for (const name of files) {
  if ((await stat(resolve(root, name))).size > 25 * 1024 * 1024) {
    throw new Error(`${name} exceeds the Cloudflare Pages 25 MiB asset limit.`);
  }
  if (!name.endsWith('.html')) continue;
  const html = await readFile(resolve(root, name), 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    if (/^(?:[a-z]+:|\/\/)/i.test(match[1])) continue;
    await stat(resolve(root, match[1]));
  }
}
await mkdir(resolve(root, 'dist'), { recursive: true });
await Promise.all(files.map(name => copyFile(resolve(root, name), resolve(root, 'dist', name))));
console.log(`Validated page links and copied ${files.length} website files to dist/.`);
