import { readFile } from 'fs/promises';

// try {
//   const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8');
// } catch (err) {
//   throw err;
// }

process.on('uncaughtException', (err) => {
  console.error(err);
});

const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8');
