import test from 'ava';
import fn from './index.js';

test('title', t => {
	t.is(fn[0], 'background');
});
