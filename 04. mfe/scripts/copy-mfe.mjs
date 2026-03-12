import { cpSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const source = join(root, 'apps/simple-form-vue/dist');
const target = join(root, 'root/public/mfe/simple-form-vue');

if (!existsSync(source)) {
  console.warn('MFE build not found at', source);
  process.exit(0);
}
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
console.log('Copied simple-form-vue to root/public/mfe/simple-form-vue');
