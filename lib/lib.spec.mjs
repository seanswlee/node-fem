import assert from 'assert';
import { add } from './myLib.mjs';

// Using assert
console.log('\nadd() should add the two numbers');
try {
  assert.strictEqual(add(1, 2), 3);
  console.log('SUCCESS!\n');
} catch (err) {
  console.log('FAILURE!\n');
  console.error(err);
}
