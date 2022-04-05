import { readFile } from 'fs/promises';

// Catching errors with control
// try {
//   const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8');
// } catch (err) {
//   throw err;
// }

// Catching errors when you do not have control over processes
process.on('uncaughtException', (err) => {
  console.error(err);
});

const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8');
